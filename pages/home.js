import * as React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Store from '../src/Components/Store';

export default function home() {
	return (
		<React.Fragment>
			<Header />
			<Store />
			<Footer />
		</React.Fragment>
	)
};

