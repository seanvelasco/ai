/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import App from './App'
import ConversationPage from './pages/Conversation'
import SpeakingPage from './pages/Speaking'
import TranslationPage from './pages/Translation'

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
