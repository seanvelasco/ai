const pinScrollingToBottom = (element: HTMLElement) => {
	const scroll = () => {
		element.scrollTop = element.scrollHeight
	}

	element.addEventListener('scroll', scroll)
}

export default pinScrollingToBottom
