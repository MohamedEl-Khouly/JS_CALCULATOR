/**
 * A script responsible for handling
 *  Calculator operations
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 * @author Mohamed El-Khouly <msirag95@gmail.com>
*/

/**
 * Define Global Variables
 *
*/

const resultDisplay = document.querySelector('.display'),
	calcBtn = document.querySelectorAll('[data-value]');

let result = 0,
	operator = '',
	op1 = 0,
	op2 = 0;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// 1. display results
function displayResult() {
	resultDisplay.textContent = result;
}

// 2. click button action
function clickedBtn() {
	const val = this.dataset.value;
	switch (val) {
		case 'clear':
			result = 0;
			break;
		case 'add':
			operator = '+';
			op1 = result;
			result = 0;
			break;
		case 'subtract':
			operator = '-';
			op1 = result;
			result = 0;
			break;
		case 'multiply':
			operator = '*';
			op1 = result;
			result = 0;
			break;
		case 'divide':
			operator = '/';
			op1 = result;
			result = 0;
			break;
		case 'modules':
			operator = '%';
			op1 = result;
			result = 0;
			break;
		case 'equal':
			op2 = result;
			result = eval(op1 + operator + op2);
			break;
		case 'negative':
			result = eval('-' + result);
			break;
		default:
			result === 0 ? result = val : result += val;
			break;
	}
	displayResult();
}
/**
 * End Helper Functions
 * Begin Main Functions
*/


/**
 * End Main Functions
 * Begin Events
 *
*/

calcBtn.forEach(btn => {
	btn.addEventListener('click', clickedBtn);
});