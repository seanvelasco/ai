import { createSignal, Show } from 'solid-js'
import { useAI } from '../states/ai'
import autoResize from '../directives/autoResize'
import { debounce } from '../helpers/debounce'
import styles from './Translation.module.css'

// to-do:
// better debounce helper
// disable inputs during api call

const TextBox = (props: {
	value: () => string
	placeholder: string
	onInput?: (event: InputEvent) => void
	disabled?: boolean
}) => {
	return (
		<div class={styles.wrapper}>
			<div class={styles.padded}>
				<div class={styles.overflowing}>
					<textarea
						value={props.value()}
						class={styles.textbox}
						placeholder={props.placeholder}
						onInput={props.onInput}
						autofocus
						spellcheck={false}
						autocomplete='off'
						use:autoResize
						disabled={props.disabled}
					/>
				</div>
			</div>
		</div>
	)
}

const TranslationPage = () => {
	const ai = useAI()
	const [source, setSource] = createSignal('')
	const [translate, setTranslated] = createSignal('')

	const debouncedTranslate = debounce(ai.translate, 3000)

	const onSourceInput = (event: InputEvent) => {
		setSource((event.currentTarget as HTMLTextAreaElement).value)
		debouncedTranslate(source()).then(setTranslated)
	}

	const onTranslatedInput = (event: InputEvent) => {
		setTranslated((event.currentTarget as HTMLTextAreaElement).value)
		debouncedTranslate(translate()).then(setSource)
	}
	return (
		<div class={styles.translation}>
			<TextBox
				value={source}
				onInput={onSourceInput}
				placeholder='Translate to and from Mandarin...'
			/>
			<Show when={source()}>
				<TextBox
					value={translate}
					onInput={onTranslatedInput}
					placeholder='Translating...'
				/>
			</Show>
		</div>
	)
}

export default TranslationPage
