import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
	return (
	<div className={styles.container}>
		<span className={styles.copyright}>©</span> 2011 Masami Asai. All rights reserved.
	</div>
	)
}

export default Footer