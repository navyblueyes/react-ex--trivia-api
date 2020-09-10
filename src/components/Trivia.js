import { useState, useEffect, useCallback} from 'react';

export default function useTrivia() {

    const [question, setQuestion] = useState(null);
    const [category, setCategory] = useState('any')

    /*   useCallback checks for getQuestion and prevents re-render */
    const getQuestion = useCallback(() => {
        let url = 'https://opentdb.com/api.php?amount=1';
        if (category !== 'any') url += `&category=${category}`;
        
        /* Fetching Questions from TriviaDB */
        fetch(url)
        .then((res) => res.json())
        .then((data) => setQuestion(data.results[0]));
    }, [category]);
    /* UseCallback allows you to use callbacks within UseEffect */

    /* Call Fetch via useEffect */
    useEffect(() => {
        getQuestion();
        }, [category, getQuestion]);
            /* ^selectedCategory will change questions immediately */

    return { question, category, setCategory, getQuestion};
}