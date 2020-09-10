import React from 'react';
import categories from '../categories';

/* Vanilla JS to decode HTML encoding by extracting 'value' from 'innerHTML' */
var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export default function CategorySelector({category, chooseCategory}) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select value={category} onChange={(e) => chooseCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {decodeHTML(category.name)}
          </option>
        ))}
      </select>
    </div>
  );
}
