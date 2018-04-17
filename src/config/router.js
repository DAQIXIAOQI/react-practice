import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import MainIndex from '../views/index/index';
import MainMusic from '../views/mymusic/mainmusic';
import Main from '../views/index/main/main';
import Singer from '../views/index/main/singer';
import Header from '../views/header/Header';

// export default () => [
// 	<Route
// 		path = "/"
// 		component = {MainIndex}
// 		exact
// 	>
// 		<IndexRedirect to = "/index" />
// 	</Route>,
// 	<Route path = "/mymusic" component = {MainMusic} />,
// ];
export default class Routes extends React.Component {
	componentDidMount() {
		console.log('routes');
	}
	render() {
		return (
			<div>
				<Route path = "/" exact component = {Main} />
				<Route path = '/index/index' component = {Main} />
				<Route path = '/index/singer' component = {Singer} />
				<Route path = "/mymusic" component = {MainMusic} />
			</div>
		);
	}
}
