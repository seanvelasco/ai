export interface Message {
	id?: string
	role: 'user' | 'bot' | 'system'
	content: string
}
