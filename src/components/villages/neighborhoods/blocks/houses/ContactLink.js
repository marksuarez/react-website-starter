import React from 'react';
import { Link } from 'react-router-dom';

class ContactLink extends React.Component{
	render() {
		return(
			<div>
				<Link to='/contact'>
					<span>
						Contact
					</span>
				</Link>
			</div>
		)
	}
}

export default ContactLink;