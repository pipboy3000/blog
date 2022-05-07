import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/globals.css'
import 'highlight.js/styles/atom-one-light.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
