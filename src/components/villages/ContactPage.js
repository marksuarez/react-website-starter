import React from 'react';
import Header from './neighborhoods/Header.js';
import {Helmet} from "react-helmet";

class ContactPage extends React.Component {
  render() {
    return (
    	<div>
    		<Helmet>
    			<title>Contact</title>
    		</Helmet>
    		<Header title='Contact'/>
    	</div>	
    )
  }
}

export default ContactPage;