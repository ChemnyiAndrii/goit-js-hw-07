const counterValueRef = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

const increment = () => {
  return (counterValueRef.textContent = currentValue += 1);
};
const decrement = () => {
  return (counterValueRef.textContent = currentValue -= 1);
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);



