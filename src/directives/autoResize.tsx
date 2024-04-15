declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			autoResize: unknown
		}
	}
}

const autoResize = (element: HTMLTextAreaElement) => {
	const initialHeight = element.style.height

	const resize = () => {
		element.style.height = initialHeight
		element.style.height = element.scrollHeight + 'px'
	}

	element.addEventListener('input', resize)
	element.addEventListener('submit', () => setTimeout(resize, 0))
}

export default autoResize
