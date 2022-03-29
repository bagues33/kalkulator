//function updateScreen untuk memperbarui layar kalkulator
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
	calculatorScreen.value = number
}

// ----------------------- 1. Proses Pertama -----------------------
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
	
}

//Meyeleksi tombol angka. Ketika tombol angka diklik, menambahkan nilai pada varialbel currentNumber dan update nilai ke layar calculator
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber);
	})
})

// ----------------------- 2. Proses Kedua -----------------------
const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

//Menyeleksi tombol operator. Ketika tombol operator diklik akan menambahkan nilai pada variable calculationOperator, meambahkan nilai ke prevNumber dan mengkosongkan currentNumber
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	})
})

// ----------------------- 3. Proses Ketiga -----------------------
const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		case "%":
			result = parseInt(prevNumber) % parseInt(currentNumber)
			break
		default:
			break
	}

	currentNumber = result
	calculationOperator = ''
}

//menyeleksi tombol =. Ketika tombol = diklik akan menjalankan function calculate() dan mengupdate tampilan layar calculator
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber)
})

// ----------------------- 4. Proses Keempat -----------------------
const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

//Menyeleksi tombol AC. Ketika tombol ini diklik akan menjalankan function clearAll dan mengupdate tampilan layar calculator
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
})

//mengaktifkan fungsi tombol decimal
inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot;
}

//menyeleksi tombol titik. Ketika tombol ini diklik akan menambahkan decimal pada variable currentNumber 
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})