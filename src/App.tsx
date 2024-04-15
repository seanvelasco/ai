import Header from './components/Header'

import Footer from './components/Footer'
import { AIProvider } from './states/ai'
import { type RouteSectionProps } from '@solidjs/router'

const App = (props: RouteSectionProps) => (
	<AIProvider>
		<div
			style={{
				display: 'flex',
				'align-self': 'center',
				'flex-flow': 'column',
				'min-height': '100dvh',
				'max-width': '48rem',
				width: '100%',
				padding: '0 1rem'
			}}
		>
			<Header />
			{props.children}
			<Footer />
		</div>
	</AIProvider>
)

export default App
