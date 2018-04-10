import React from 'react';
import Layout from "./Layout"
import {App, AppHeader, Title, AppIntro, AppLogo } from './styles'
import logo from './logo.svg';
//import './App.css';

//const paragraphStyles = { backgroundColor: "orange"};

export default function Home() {
	//throw new Error;
    return (
    	<Layout
    	title="Welcome to React"
    	renderContent={() => (
    		<React.Fragment>
				<AppIntro>
	        		To get started, edit <code>src/App.js</code> and save to reload.
	        	</AppIntro>cAppIntroAppIntro
	        	<h2>UX here we go</h2>
    		</React.Fragment>
    		)}
    	/>
    );
}
