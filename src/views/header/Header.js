import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import logoImg from '../../image/logo.png';
import ListUl from './ul/ListUl';
import Topsearch from './topsearch/topsearch';
import Topsmallnav from './topsmallnav/topsmallnav';
import Main from '../index/main/main';
import Singer from '../index/main/singer';


//const mainT = [{ id: 'top-bignav-music', name: '音乐馆', path: '/' }, { id: 'top-bignav-mymusic', name: '我的音乐', path: '/mymusic' }, { id: 'top-bignav-download', name: '下载客户端', path: '/download' }, { id: 'top-bignav-vip', name: 'VIP', path: '/vip' }];
const mainT = [{ id: 'top-bignav-music', name: '音乐馆', path: '/' }, { id: 'top-bignav-mymusic', name: '我的音乐', path: '/mymusic' },];
const smallT = [{ name: '首页', path: '/' }, { name: '歌手', path: '/index/singer' }, { name: '专辑', path: '/cd' }, { name: '排行榜', path: '/rank' }, { name: '分类歌单', path: '/type' }, { name: 'MV', path: '/mv' }];
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.inval || 'null',
			smallNav:''
		};
		this.snavToggle = this.snavToggle.bind(this);
	}
	componentDidMount() {
		this.snavToggle(window.location.pathname);
	}
	snavToggle(e) {	
		console.log(e);
		if( e === '/' && this.state.smallNav == '' ){
			this.setState({
				smallNav:smallT
			});
		}
		else if(this.state.smallNav != ''){
			this.setState({
				smallNav:''
			});
		}
	}
	render() {
		return (
			<div id = "header" className = "header box" >
				<div id = "top-main" className = "box-main" >
					<div className = "box-main-top" >
						<div id = "top-logo" >
							<a href = "#"><img src = {logoImg} /></a>
						</div>
						<ListUl data = { mainT } onNav = {this.snavToggle} />
						<Topsearch />
					</div>	
					{this.state.smallNav ? <Topsmallnav data = {this.state.smallNav} /> :''}
				</div>
			</div>
		);
	}
}
Header.propTypes = {
	inval: PropTypes.string,
};
Header.defaultProps = {
	inval: 'bbb',
};

export default Header;
