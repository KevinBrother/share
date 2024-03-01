const a = 1;
const fruits = ['apple', 'banana', 'orange'];

function abc(c) {
  return 12 + c;
}

const b = abc(a);

document.getElementById('buttonClick')?.addEventListener('click', () => {
  const value = abc(Math.random());
  const _value = value;
  document.getElementById('inputValue').value = value;
});
