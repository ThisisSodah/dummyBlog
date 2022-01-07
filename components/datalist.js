import React from 'react'
import Post from './post'
import datalistStyles from '../styles/Datalist.module.css'

const Datalist = ({data}) => {

	const renderEmptyPlaceholder = () => {
		return (
			<h1>
				No posts found.
			</h1>
		)
	}

	const renderList = () => {
		if (data && data.length) {
			return (
				<div className={datalistStyles.container}>
					{
						data.map((post, key) => {
							return (
								<React.Fragment key={key}>
									<Post
										title={post.title}
										body={post.body}
										id={post.id}
									/>
								</React.Fragment>
							)
						})
					}
				</div>
			)
		}
	}
	return (
		<>
			{renderList()}
		</>
	)
}

export default Datalist
