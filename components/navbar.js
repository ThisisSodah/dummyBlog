import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" style={{backgroundColor: "rgb(0, 3, 80, 0.8)", borderBottom: "1px solid #33bfff", backdropFilter: "blur(10px)"}}>
				<Toolbar>
					<Typography
						component={Link}
						variant="h6"
						href={"/"}
					>
						Dummy Blog
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar
