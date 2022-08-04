import React from 'react'
import styles from './Alert.module.css'

interface Props {
	children: React.ReactNode
}

const Alert: React.FC<Props> = ({ children }) => {
	return (
	<div className={styles.container}>
		{ children }
	</div>
	)
}

export default Alert