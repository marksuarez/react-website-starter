import React from 'react';
import HomeLink from './houses/HomeLink.js';
import ContactLink from './houses/ContactLink.js';

class Navigation extends React.Component{
	render() {
		return(
			<div>
				<HomeLink/>
				<ContactLink/>
			</div>
		)
	}
}

export default Navigation;