import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, List, ListItem, ListItemText} from '@mui/material';

export default function foorter() {
	return (
		<React.Fragment>
			<Box style={{backgroundColor: "#40E0D0"}}>
				<Grid container spacing={0}>
					<Grid item xs={6}>
						<h4 style={{marginLeft:10}}>StefansUglyShop</h4>
						<List>
							<ListItem>
								<ListItemText primary="Phone: 34 420 69"/>
							</ListItem>
							<ListItem>
								<ListItemText primary="Oslo, Norway"/>
							</ListItem>
							<ListItem>
								<ListItemText primary="str. Ugly Corner 13"/>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={6}>
						<h4>Shop</h4>
						<List>
							<ListItem>
								<ListItemText primary="Made in Oslo"/>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Box>	
		</React.Fragment>
	);
}
