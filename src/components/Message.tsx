import user from '../assets/user.svg'
import bot from '../assets/bot.svg'
import system from '../assets/system.svg'
import type { Message } from '../types'
import styles from './Message.module.css'

const avatar = {
	user: user,
	bot: bot,
	system: system
}

const Message = (props: { message: Message }) => {
	// message
	// speak
	// word-for-word highlighting
	// en-zh translation
	return (
		<div class={styles.message}>
			<img class={styles.avatar} src={avatar[props.message.role]} />
			<p>{props.message.content}</p>
		</div>
	)
}

export default Message
