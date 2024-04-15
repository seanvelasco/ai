import { Show, For } from 'solid-js'
import Message from './Message'
import Suggestions from './Suggestions'
import { useAI } from '../states/ai'
import styles from './Conversation.module.css'

const Conversation = () => {
	const ai = useAI()

	return (
		<Show when={ai.messages} fallback={<Suggestions />}>
			<div class={styles.conversation}>
				<For each={ai.messages}>
					{(message) => <Message message={message} />}
				</For>
			</div>
		</Show>
	)
}

export default Conversation
