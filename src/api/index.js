import axios from 'axios'
const endpoint = 'https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/hye';
import { v4 as uuid4 } from 'uuid';

export async function post(data) {
	let config = {
		headers: {
			'Content-type': 'application/json',
		}
	}

	const article = {
		user_id: uuid4(),
		checkout_time: new Date().toLocaleString(),
		data: data
	};
	await axios.post(endpoint, article, config).then(res => {
		console.log('response saved!');
	}).catch(err => {
		console.error('failed to save response: ', err);
	})
}
