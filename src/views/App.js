import React, { Component } from 'react';
import Routes from '../config/router';
import Header from '../views/header/Header';

class App extends Component {
	componentDidMount() {
	}
	render() {
		return [
			<Header />,
			<Routes />,
		];
	}
}
export default App;
