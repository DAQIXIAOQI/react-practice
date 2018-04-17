import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


class Topsearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMin: false,
			isHover: false,
		};
		this.hide = this.hide.bind(this);
		this.show = this.show.bind(this);
		this.composeValue = this.composeValue.bind(this);
	}
	componentDidMount() {
		console.log('topsearch loaded');
		const that = this;
		window.addEventListener('resize', that.composeValue);
		that.composeValue();
	}
	composeValue() {
		const that = this;
		const wid = document.documentElement.clientWidth;
		if (wid < 1250 && !that.state.isMin) {
			that.setState({
				isMin: true,
			});
		} else if (wid > 1250 && that.state.isMin) {
			that.setState({
				isMin: false,
			});
		}
	}
	hide(e) {
		this.setState({
			isHover: false,
		});
	}
	show(e) {
		this.setState({ isHover: true });
	}
	render() {
		return (
			<div id = "top-search" onFocus = { this.show } onBlur = { this.hide } onMouseOut = { this.hide } onMouseOver = { this.show }>
				<input name = "search" placeholder = "歌手" className = { (this.state.isHover || !this.state.isMin) ? '' : 'min' } />
				<div id = "top-search-btn" >
					<em></em>
				</div>
			</div>
		);
	}
}

Topsearch.propTypes = {

};

Topsearch.defaultProps = {

};

export default Topsearch;
