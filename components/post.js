import { Badge, Button, Card, CardActionArea } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import postStyles from '../styles/Post.module.css'

const Post = ({title, body, id}) => {
	return (
		<Link href="/[id]" as={`/${id}`}>
			<Badge badgeContent={`#${id}`} color="primary">
				<Card className={postStyles.container}>
					<div className={postStyles.title}>
						{title}
					</div>
					<div className={postStyles.postBody}>
						{body}
					</div>
				</Card>
			</Badge>
		</Link>
	)
}

export default Post
