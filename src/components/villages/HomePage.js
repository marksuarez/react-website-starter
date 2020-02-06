import React from 'react';
import Header from './neighborhoods/Header.js';
import {Helmet} from "react-helmet";


class HomePage extends React.Component {
  render() {
    return (
    	<div>
    		<Helmet>
    			<title>Home</title>
    		</Helmet>
    		<Header title='Home'/>	
      	</div>	
    )
  }
}

export default HomePage;