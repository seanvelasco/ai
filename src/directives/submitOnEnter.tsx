const submitOnEnter = (element: HTMLTextAreaElement) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			if (Boolean(element.value.trim())) {
				const submit = new Event('submit')
				element.dispatchEvent(submit)
			}
		}
	}
	element.addEventListener('keydown', onKeyDown)
}

export default submitOnEnter
