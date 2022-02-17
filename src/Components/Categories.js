import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#fff',
	...theme.typography.body2,
	margin: theme.spacing(4),
	padding: theme.spacing(4),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


const ShopCategory = ({category}) => {
	return (
		<Grid minHeight={150} item xs={3}>
			<Item>
				<ButtonBase href={`/products`}>
				<Typography>{category}</Typography>
				</ButtonBase>
			</Item>
		</Grid>
	)
};

export default function Store({ }) {
	const [shopCat, setShopCat] = useState([]);

	useEffect(()=> {
		axios.get("https://fakestoreapi.com/products/categories").then(({data})=> {
			setShopCat(data);
			console.log(data)
		})
	}, []);

	return (
		<React.Fragment>
			<Box>
				<Grid container  spacing={1}>
					{shopCat.map((item) => {
							return <ShopCategory category={item} />
					})}
				</Grid>
			</Box>
		</React.Fragment>
	);
}
