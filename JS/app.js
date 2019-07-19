const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

const calcNumBtns = document.getElementsByClassName('calc-btn-num');
const calcOperatorsBtns = document.getElementsByClassName('calc-btn-operator');

const updateDisplayVal = (event) => {
  const btnText = event.target.innerText;

  if (displayVal === '0') {
    displayVal = '';
  }

  displayVal += btnText;
  displayValElement.innerText = displayVal;
}


const performOperation = (event) => {
  const operator = event.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
    case 'x':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;
    case '=':
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(' '));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
    default:
      break;
  }
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorsBtns.length; i++) {
  calcOperatorsBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  displayValElement.innerText = displayVal;

  if (displayVal === '') {
    displayVal = '0';
    displayValElement.innerText = displayVal;
  }
}

decimalBtn.onclick = () => {
  if (!displayVal.includes('.')) {
    displayVal += '.';
    displayValElement.innerText = displayVal;
  }
}