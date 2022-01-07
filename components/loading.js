import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import styles from '../styles/Layout.module.css'

const Loading = () => {
	return (
		<div className={styles.container}>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	)
}

export default Loading
