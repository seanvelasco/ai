let DEV = false

const BASE_URL = !DEV ? 'https://api.slater.sean.app' : 'http://localhost:8787'

export const fetchCompletion = async (message: string) => {
	const request = new Request(`${BASE_URL}?prompt=${message}`, {
		method: 'POST',
		headers: {
			accept: 'text/event-stream'
		},
		body: JSON.stringify({
			prompt: message
		})
	})

	const response = await fetch(request)

	return response.body
}

export const sseCompletion = (message: string) => {
	const stream = new EventSource(`${BASE_URL}?prompt=${message}`)

	stream.onerror = (event) => console.error(event)

	return stream
}

export const fetchTranslation = async (message: string) => {
	const request = new Request(`${BASE_URL}?translate=${message}`)

	const response = await fetch(request)

	return response.json()
}
