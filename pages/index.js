import * as React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Categories from '../src/Components/Categories';

export default function index() {
	return (
		<React.Fragment>
			<Header />
			<Categories />
			<Footer />
		</React.Fragment>
	)
};

