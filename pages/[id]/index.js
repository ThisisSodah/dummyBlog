import { Card, CardMedia, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React from 'react'
import Comment from '../../components/comment';
import postDetailsStyles from '../../styles/PostDetails.module.css'

const PostDetails = ({ post, comments, image }) => {

	const renderComments = () => {
		if (comments && comments.length) {
			return (
				<div className={postDetailsStyles.commentsContainer}>
					{comments.map((comment, key) => {
						return (
							<React.Fragment key={key}>
								<Comment data={comment} />
							</React.Fragment>
							)
						})
					}
				</div>
			)
		}
	}
	return (
		<div className={postDetailsStyles.container}>
			<Card className={postDetailsStyles.cardContainer}>
				<CardMedia
      	  component="img"
					height="200"
      	  image="https://picsum.photos/200"
					alt="random-image"
					className={postDetailsStyles.randomImage}
      	/>
				<Typography variant='h4'>
					{post.title}
				</Typography>
				<Typography variant='h6' style={{margin: "16px 0"}}>
					{post.body}
				</Typography>
				{renderComments()}
			</Card>
		</div>
	)
}

export default PostDetails;

export const getStaticProps = async (ctx) => {
	let id = ctx?.params?.id;
	try {
		const postApi = `https://jsonplaceholder.typicode.com/posts/${id}`;
		const commentsApi = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
		let post = await fetch(postApi);
		let comments = await fetch(commentsApi);
		post = await post.json();
		comments = await comments.json();
		return {
			props: {
				post, comments
			}
		}
	} catch (e) {
		console.error(e)
	}
}

export const getStaticPaths = async () => {
	try {
		let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		posts = await posts.json();
		const ids = posts.map(post => post.id);
		const paths = ids.map(id => ({params: {id: id.toString()}}))
		return {
			paths,
			fallback: false
		};
	} catch (error) {
		console.error(error)
	}
}
