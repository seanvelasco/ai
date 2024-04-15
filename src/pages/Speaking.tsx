import { createSignal, createEffect } from 'solid-js'
import styles from './Speaking.module.css'

const SpeakingPage = () => {
	const [audio, setAudio] = createSignal<Blob[]>([])
	const [listening, setListening] = createSignal(false)

	createEffect(() => console.log(listening()))
	createEffect(() => console.log(audio()))

	const onRecord = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true
		})

		console.log('Stream created', stream)

		const recorder = new MediaRecorder(stream)

		recorder.start()

		console.log('Recorder started', recorder)

		recorder.ondataavailable = (event) => {
			console.log(event)
			setAudio([...audio(), event.data])
		}

		recorder.onstart = () => setListening(true)

		recorder.onerror = () => setListening(false)

		recorder.onstop = () => setListening(false)

		recorder.onpause = () => setListening(false)
	}

	createEffect(() => {
		if (listening()) {
			onRecord()
		}
	})

	const toggleListening = () => setListening(!listening())

	return (
		<div class={styles.wrapper}>
			<p>{listening()}</p>
			<button class={styles.record} onClick={toggleListening}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 384 512'
					fill='var(--text)'
					width='5rem'
					height='5rem'
				>
					<path d='M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z' />
				</svg>
			</button>
		</div>
	)
}

export default SpeakingPage
