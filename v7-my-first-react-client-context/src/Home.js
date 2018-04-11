import React from 'react';
import {withLayout} from "./Layout" //HOC function
import {AppIntro} from './styles'
import Greeting from "./Greeting"

//import logo from './logo.svg';
//import './App.css';

//const paragraphStyles = { backgroundColor: "orange"};

export function Home({updateMessage}) {
//export function Home(props) {
//<h2>{props.message}</h2>
    //props.message="Solo lectura"
    //message="Ahora si puedo";
	//throw new Error;
    return (
        //<Layout
    	//title="Welcome to React"
    	//renderContent={() => (
    		<React.Fragment>
				<AppIntro>
	        		To get started, edit <code>src/App.js</code> and save to reload.
	        	</AppIntro>
	        	<h2>UX here we go</h2>
                <Greeting/>
                <button onClick={()=> updateMessage("from button")}> Click me!</button>
    		</React.Fragment>
    	//	)}
    	///>
    );
}
//                <Greeting message={message}/>

export default withLayout("Welcome react")(Home);