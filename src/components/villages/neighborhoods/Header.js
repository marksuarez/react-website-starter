import React from 'react';
import Navigation from './blocks/Navigation.js';

class Header extends React.Component{
	render() {
		return (
			<div>
				<Navigation/>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default Header;