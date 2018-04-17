import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Topsmallnav extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	currentTopic(match,location) {
		if(match && (match.path === location.pathname)) {
			return true
		}
	}
	render() {
		const arr = new Array();
		this.props.data.map((e, index) => (
			arr.push(<NavLink to={e.path} activeClassName = 'current' isActive = {this.currentTopic} ><li key={ e.name } >{e.name}</li></NavLink>)
		));
		return (
			<ul id="top-smallnav">
				{arr}
			</ul>
		);
	}
}

Topsmallnav.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Topsmallnav;
