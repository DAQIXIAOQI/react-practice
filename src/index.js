import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
const Render = (C) => {
	ReactDom.render(
		<Router>
			<C />
		</Router>,
		root,
	);
};
Render(App);
registerServiceWorker();

/*---------------------------*/
// class App1 extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>App</h1>
// 				<ul>
// 					<li><Link to="/about">About</Link></li>
// 					<li><Link to="/inbox">Inbox</Link></li>
// 				</ul>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// };

// class About extends React.Component {
// 	render() {
// 		return(
// 			<div>Inbox</div>
// 		)
// 	}
// }

// class Inbox extends React.Component {
// 	render() {
// 		return(
// 			<div>Inbox</div>
// 		)
// 	}
// }

// ReactDom.render((
// 	<Router>
// 		<Route 
// 			path="/" 
// 			component={App1} 
// 			exact 
// 			render={() => ([
// 				<Route path="about" component={About} />,
// 				<Route path="inbox" component={Inbox} />
// 			])} 
// 		/>
// 	</Router>
// ), root);
