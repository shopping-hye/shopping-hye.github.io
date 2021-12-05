import axios from 'axios'
const endpoint = 'https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/clarksonedu-hye';

export async function checkout() {
	console.log(`reading data`);
	let config = {
		headers: {
			'Content-type': 'application/json',
		}
	}

	const article = { user_id: 'us', checkout_time: 121212 };
	await axios.post(endpoint, article, config).then(res => {
		console.log(res)
	})
}
