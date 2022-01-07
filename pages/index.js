import { Typography } from '@mui/material'
import React from 'react'
import Datalist from '../components/datalist'
import homeStyles from '../styles/Home.module.css'

export default function Home({data}) {
	return (
		<div className={homeStyles.centerContainer}>
			<Typography variant="h3" style={{margin: "16px 0"}}>
				Dummy Blog
			</Typography>
			<Datalist data={data}/>
		</div>
	)
}

export const getStaticProps = async () => {
	try {
		const api="https://jsonplaceholder.typicode.com/posts"
		const results = await fetch(api);
		let data = await results.json();
		return {
			props: {
				data
			}
		}
	} catch (error) {
		console.error(error)
	}
}
