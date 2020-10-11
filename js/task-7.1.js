const items = document.querySelectorAll('li.item');
console.log(`У списку ${items.length} категорії.`);

items.forEach(num =>
  console.log(`Категорія: ${num.firstElementChild.textContent}
Кількість елементів: ${num.lastElementChild.children.length}`),
);
