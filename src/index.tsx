/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import App from './App'
import ConversationPage from './pages/Conversation'
import SpeakingPage from './pages/Speaking'
import TranslationPage from './pages/Translation'

// to-do: figure out proper typing for directives and recognize directive imports and usage

declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			submitOnEnter: unknown
			autoResize: unknown
		}
	}
}

const root = document.getElementById('root')

render(
	() => (
		<Router root={App}>
			<Route path='/' component={ConversationPage} />
			<Route path='/translate' component={TranslationPage} />
			<Route path='/speak' component={SpeakingPage} />
		</Router>
	),
	root!
)
