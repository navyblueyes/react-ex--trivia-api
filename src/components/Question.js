import React from 'react';

const sampleAnswers = ['One', 'Two', 'Three', 'Four'];

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export default function Question( {question}) {
  const answers = [...question.incorrect_answers, question.correct_answer];
  return (
    <div className="question">
      <h2>{decodeHTML(question.question)}</h2>

      {answers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}
