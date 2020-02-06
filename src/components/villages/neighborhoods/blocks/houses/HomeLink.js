import React from 'react';
import { Link } from 'react-router-dom'

class HomeLink extends React.Component{
	render() {
		return(
			<div>
				<Link to='/'>
					<span>
						Home
					</span>
				</Link>
			</div>
		)
	}
}

export default HomeLink;