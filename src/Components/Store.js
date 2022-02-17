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
	backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#C5F5F0',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

const StoreItems = ({id, title, price, image}) => {
	return (
		<Grid minHeight={150} item xs={3}>
			<Item style={{height: "100%"}}>
				<Typography># {id}</Typography>
				<ButtonBase href={`/products/${id}`}>
					<Img alt="complex" width={150} center src={image} />
					<Typography>{title}</Typography>
					<Typography>{price} NOK</Typography>
				</ButtonBase>
			</Item>
		</Grid>
	)
}

export default function Store() {
	const [storeItems, setStoreItems] = useState([]);

	useEffect(()=> {
		axios.get("https://fakestoreapi.com/products").then(({data})=> {
			setStoreItems(data);
		})
	}, [])

	return (
		<React.Fragment>
			<Box>
				<Grid container  spacing={1}>
					{storeItems.map((item) => {
						return <StoreItems id={item.id} title={item.title} price={item.price} image={item.image}/>
					})}
				</Grid>
			</Box>
		</React.Fragment>
	);
}
