import axios from 'axios'
const endpoint = 'https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/hye';

export async function post(data) {
	let config = {
		headers: {
			'Content-type': 'application/json',
		}
	}

	const article = {
		user_id: generateUID(),
		checkout_time: new Date().toLocaleString(),
		data: data
	};
	await axios.post(endpoint, article, config).then(res => {
		console.log('response saved!');
	}).catch(err => {
		console.error('failed to save response: ', err);
	})
}

function generateUID() {
	// I generate the UID from two parts here
	// to ensure the random number provide enough bits.
	let firstPart = (Math.random() * 46656) | 0;
	let secondPart = (Math.random() * 46656) | 0;
	firstPart = ("000" + firstPart.toString(36)).slice(-3);
	secondPart = ("000" + secondPart.toString(36)).slice(-3);
	return firstPart + secondPart;
}
