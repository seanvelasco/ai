import { type JSXElement } from 'solid-js'

const Button = (props: { children: JSXElement }) => (
	<button {...props}>{props.children}</button>
)

export default Button
