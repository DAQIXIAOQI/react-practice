import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

class ListUl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
		};
		this.click = this.click.bind(this);
	}
	currentTopic(match,location) {
		if(match && (match.path === location.pathname || location.pathname.match('index'))) {
			return true
		}
	}
	click(e) {
		this.props.onNav(e.currentTarget.getAttribute('path'));
	}
	render() {
		let lis = new Array();
		lis = this.state.data.map((e, index) => (<NavLink to = {e.path} key = {e.id} activeClassName = 'current' isActive={this.currentTopic} ><li id = {e.id} path = {e.path} onClick = {this.click} ><a>{e.name}</a></li></NavLink>));
		return (
			<ul id = "top-bignav"> {lis}  </ul>
		);
	}
}

ListUl.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListUl;
