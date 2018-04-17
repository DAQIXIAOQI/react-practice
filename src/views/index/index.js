import React from 'react';

import ReactDOM from 'react-dom';


class MainIndex extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<div>
				<Father />
			</div>
		);
	}
}

class Father extends React.Component {
	constructor() {
		super();
		this.handson1 = this.handson1.bind(this);
		this.handson2 = this.handson2.bind(this);
		this.state = {
			type:'son1',
			values:''
		};
	}
	handson1(value) {
		this.setState({
			type:'son1',
			'values':value,
		});
	}
	handson2(value) {
		this.setState({
			type:'son2',
			'values':value
		});
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<Son1 values = {this.state.values} onTC = {this.handson1} />
				<Son2 values = {this.state.values} onTC = {this.handson2} />
				type:{this.state.type}
				<br/>
				value:{this.state.values}
			</div>
		);
	}
}

class Son1 extends React.Component {
	constructor(prop) {
		super(prop);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.onTC(e.target.value);
	}
	render() {
		return (
			<div>son1:<input type = 'text' value = {this.props.values} onChange = {this.handleChange} /></div>
		);
	}
}

class Son2 extends React.Component {
	constructor(prop) {
		super(prop);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.onTC(e.target.value);
	}
	render() {
		return (
			<div>son2:<input type = 'text' value = {this.props.values} onChange = {this.handleChange} /></div>
		);
	}
}

export default MainIndex;
