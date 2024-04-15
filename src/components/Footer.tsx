import styles from './footer.module.css'

const Footer = () => (
	<footer class={styles.footer}>
		<p>
			Powered by <a>Meta Llama 2</a>, <a>Meta M2M-100</a>,{' '}
			<a>OpenAI Whisper</a>, and <a>Cloudflare</a>.
		</p>
	</footer>
)

export default Footer
