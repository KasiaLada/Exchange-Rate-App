const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}&appid=1baf771d988db64fdbfb4c6ef222790c`
	)
		.then((res) => res.json())
		.then((data) => console.log(data));
};
calculate();
