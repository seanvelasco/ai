import { Show, For } from 'solid-js'
import Message from '../components/Message'
import Suggestions from '../components/Suggestions'
import Prompt from '../components/Prompt'
import { useAI } from '../states/ai'
import styles from './Conversation.module.css'

export const ConversationPage = () => {
	const ai = useAI()

	return (
		<>
			<Show when={ai.messages.length} fallback={<Suggestions />}>
				<div class={styles.conversation}>
					<For each={ai.messages}>
						{(message) => <Message message={message} />}
					</For>
				</div>
			</Show>
			<div
				style={{
					position: 'sticky',
					bottom: 0,
					background: 'var(--background)'
				}}
			>
				<Prompt />
			</div>
		</>
	)
}

export default ConversationPage
