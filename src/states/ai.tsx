import { createContext, useContext, type JSXElement } from 'solid-js'
import { createStore, type SetStoreFunction } from 'solid-js/store'
import { sseCompletion, fetchTranslation } from '../api/ai'
import { uuid } from '../helpers/uuid'
import type { Message } from '../types'

enum Role {
	USER = 'user',
	BOT = 'bot',
	SYSTEM = 'system'
}

interface AI {
	messages: Message[]
	setMessages: SetStoreFunction<Message[]>
	translate: (source: string) => Promise<string>
	prompt: (prompt: string) => void
}

const AIContext = createContext<AI>()

// to-do:
// proper implementation of loading states
// proper error handling

const AIProvider = (props: { children: JSXElement }) => {
	const [messages, setMessages] = createStore<Message[]>([])

	const translate = async (source: string) => {
		const translation = await fetchTranslation(source)
		return translation.translated_text
	}

	const prompt = (prompt: string) => {
		const stream = sseCompletion(prompt)

		ai.setMessages((messages) => [
			...messages,
			{ id: uuid(), role: Role.USER, content: prompt }
		])

		const id = uuid()

		setMessages((messages) => [
			...messages,
			{ id, role: Role.BOT, content: '' }
		])

		stream.onmessage = (event) => {
			if (event.data) {
				if (event.data === '[DONE]') {
					stream.close()
				} else {
					const { response } = JSON.parse(event.data)
					ai.setMessages(
						(message) => message.id === id,
						'content',
						(content) => content + response
					)
				}
			}
		}
	}

	const ai = {
		messages,
		setMessages,
		translate,
		prompt
	}

	return <AIContext.Provider value={ai}>{props.children}</AIContext.Provider>
}

const useAI = () => {
	const ai = useContext(AIContext)

	if (!ai) throw new Error('useAI must be used within an AIProvider')

	return ai
}

export { AIProvider, useAI }
