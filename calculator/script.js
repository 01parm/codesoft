const exprEl = document.getElementById('expression');
const resultEl = document.getElementById('result');
const keys = document.querySelector('.keys');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const themeToggle = document.getElementById('theme-toggle');

let expression = '';

function updateDisplay() {
  exprEl.textContent = expression;
  try {
    resultEl.textContent = expression ? eval(expression) : '0';
  } catch {
    resultEl.textContent = 'Error';
  }
}

keys.addEventListener('click', e => {
  const val = e.target.getAttribute('data-value');
  if (!val) return;

  expression += val;
  updateDisplay();
});

clearBtn.addEventListener('click', () => {
  expression = '';
  updateDisplay();
});

equalsBtn.addEventListener('click', () => {
  try {
    expression = eval(expression).toString();
    updateDisplay();
  } catch {
    resultEl.textContent = 'Error';
  }
});

document.addEventListener('keydown', e => {
  const allowed = '0123456789.+-*/()';
  if (allowed.includes(e.key)) {
    expression += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    try {
      expression = eval(expression).toString();
      updateDisplay();
    } catch {
      resultEl.textContent = 'Error';
    }
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === 'c') {
    expression = '';
    updateDisplay();
  }
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});