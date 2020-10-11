const inputText = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
inputText.addEventListener('input', onInput);
function onInput() {
  const size = inputText.value;
  textSize.style.fontSize = size + 'px';
}
