import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { post } from './api/api'

// initialization
const products = shuffleArray([0, 1, 2]);
const prices = shuffleArray([0, 1, 2]);
const data = {};
(() => {
	data.user_id = generateUID();
	data.version = '';
	for(let i = 0; i < 3; i++) {
		data.version += products[i] + '' + prices[i];
	}
	data.loading_time = new Date().toLocaleString();
	for(let i = 0; i < 3; i++) {
		data['product_cards_whole_' + products[i] + '_' + prices[i]] = [];
		data['product_cards_price_' + products[i] + '_' + prices[i]] = [];
		data['product_details_image_' + products[i] + '_' + prices[i]] = [];
		data['product_details_tile_description_' + products[i] + '_' + prices[i]] = [];
		data['product_details_price_' + products[i] + '_' + prices[i]] = [];
	}
})()

console.info(`App meta data: ${JSON.stringify(data, null, 2)}`);

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
	<BrowserRouter>
		<App data={data} products={products} prices={prices}/>
	</BrowserRouter>,
  document.getElementById('root')
);

function generateUID() {
	// I generate the UID from two parts here
	// to ensure the random number provide enough bits.
	let firstPart = (Math.random() * 46656) | 0;
	let secondPart = (Math.random() * 46656) | 0;
	firstPart = ("000" + firstPart.toString(36)).slice(-3);
	secondPart = ("000" + secondPart.toString(36)).slice(-3);
	return firstPart + secondPart;
}

window.onbeforeunload = function (event) {
	console.log('reloading...')
	post(data, false).then(res => {}).catch(err => {
		console.log('failed to save the data')
	});
	event.preventDefault();
	return true;
}