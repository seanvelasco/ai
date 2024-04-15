import { A } from '@solidjs/router'
import styles from './Header.module.css'

const Header = () => (
	<header class={styles.header}>
		<nav class={styles.nav}>
			<div>
				<A href='/'>
					<h1 class={styles.wordmark}>slater</h1>
				</A>
			</div>
			<div>
				<A href='/'>Chat</A>
			</div>
			<div>
				<A href='/translate'>Translate</A>
			</div>
			<div>
				<A href='/speak'>Speak</A>
			</div>
		</nav>
	</header>
)

export default Header
