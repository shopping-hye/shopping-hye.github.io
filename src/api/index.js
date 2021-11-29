import axios from 'axios'
const slackUrl = 'https://hooks.slack.com/services/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';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export async function readGoogleSheet() {
	console.log(`reading data`);
	let config = {
		headers: {
			'Content-Type': 'application/json',
		}
	}

	const article = { title: 'React POST Request Example' };
	await axios.post(slackUrl, article).then(res => {
		console.log(res)
	})
}
