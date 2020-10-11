const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ingredientsList = ingredients.map(ingredient => {
  const listItemCreateEl = document.createElement('li');
  listItemCreateEl.textContent = ingredient;
  return listItemCreateEl;
});
document.querySelector('#ingredients').append(...ingredientsList);