import * as React from 'react';
import Header from '../../src/Components/header';
import Footer from '../../src/Components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
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

const ItemDetails = ({id, title, price, image, description}) => {
	return (
		<Item>
				<Typography># {id}</Typography>
					<Img alt="complex" width={150} src={image} />
				<Typography>{title}</Typography>
				<Typography>{description}</Typography>
				<Typography>{price} NOK</Typography>
				<ButtonBase href={``}>
					<Button>Buy now</Button>
				</ButtonBase>
		</Item>
	)
}

export default function itemId() {
	const router = useRouter()
	const { id } = router.query
	const [itemInfo, setItemInfo] = useState({});
	
	useEffect(()=> {
		if(id) {
			axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=> {
			setItemInfo(data);
			console.log("data", data)
			return
		})
	}}, [id])

	return (
		<React.Fragment>
			<Header />
				<Box>	
					<ItemDetails id={itemInfo.id} title={itemInfo.title} price={itemInfo.price} image={itemInfo.image} description={itemInfo.description}/>
				</Box>
			<Footer />
		</React.Fragment>
	)
};

