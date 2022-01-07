import { Avatar, Divider, Typography } from '@mui/material';
import React from 'react'
import commentStyles from '../styles/Comment.module.css';

const Comment = ({ data }) => {
	
	const getName = () => {
		return `${data.name.split(' ')[0][0].toUpperCase()}${data.name.split(' ')[1][0].toUpperCase()}`
	}

	return (
		<>
			<div className={commentStyles.container}>
				<Avatar className={commentStyles.avatar}>
					{getName()}
				</Avatar>
				<Typography className={commentStyles.commentBody}>
					{data.body}
				</Typography>
			</div>
			<Divider style={{margin: "16px 0"}}/>
		</>
	)
}

export default Comment
