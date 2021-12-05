import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// initialization
const products = shuffleArray([0, 1, 2]);
const prices = shuffleArray([0, 1, 2]);
const data = {};
(() => {
	data.version = [];
	for(let i = 0; i < 3; i++) {
		data.version.push(products[i] + '-' + prices[i]);
	}
	data.testing_time = new Date().toLocaleString();
})()

console.log(`App meta data: ${JSON.stringify(data)}`);

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App data={data} products={products} prices={prices}/>
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById('root')
);
