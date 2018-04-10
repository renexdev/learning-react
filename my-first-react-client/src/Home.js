import React from 'react';
import {withLayout} from "./Layout" //HOC function
import {AppIntro} from './styles'

//import logo from './logo.svg';
//import './App.css';

//const paragraphStyles = { backgroundColor: "orange"};

export function Home() {
  
	throw new Error;
    return (
        //<Layout
    	//title="Welcome to React"
    	//renderContent={() => (
    		<React.Fragment>
				<AppIntro>
	        		To get started, edit <code>src/App.js</code> and save to reload.
	        	</AppIntro>
	        	<h2>UX here we go</h2>
    		</React.Fragment>
    	//	)}
    	///>
    );
}

export default withLayout("Welcome react")(Home);