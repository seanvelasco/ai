import { For } from 'solid-js'
import { useAI } from '../states/ai'
import styles from './suggestions.module.css'

const suggestons = [
	'Help me pronounce 四 (sì)',
	'What are the difference between mā, má, mǎ, mà',
	'Help me order a large iced coffee in Mandarin',
	'Translate 我们向异世界的居民致以最美好的祝愿'
]

const Suggestion = (props: { suggestion: string; onClick?: () => void }) => {
	return (
		<button class={styles.suggestion} onClick={props.onClick}>
			{props.suggestion}
		</button>
	)
}
const Suggestions = () => {
	const ai = useAI()

	const onSuggest = (suggestion: string) => ai.prompt(suggestion)

	return (
		<div class={styles.suggestions}>
			<For each={suggestons}>
				{(suggestion) => (
					<Suggestion
						onClick={() => onSuggest(suggestion)}
						suggestion={suggestion}
					/>
				)}
			</For>
		</div>
	)
}

export default Suggestions
