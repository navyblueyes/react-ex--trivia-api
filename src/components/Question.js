import React from 'react';
import shuffle from 'lodash.shuffle';

/* Vanilla JS to decode HTML encoding by extracting 'value' from 'innerHTML' */
var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export default function Question( {question, answerQuestion }) {
  const answers = shuffle([
    ...question.incorrect_answers, 
    question.correct_answer
  ]);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button key={index} onClick={() => answerQuestion(answer)} dangerouslySetInnerHTML={{ __html: answer }}/>
      ))}
    </div>
  );
}
