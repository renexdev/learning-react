import React, { Component } from 'react';
//import React, { Component, Fragment } from 'react';
import Home from "./Home";
import './App.css';
import T from "prop-types"
class App extends Component {
	static childContextTypes = {
		message: T.string
	};
	
	state ={
		message: "Hola desde App main class"
	};

	getChildContext(){
		return{message: this.state.message};
	}

	updateMessage = message => this.setState({message});
	render() {
    	//return [<Home key="home" />,<h1 key="heading"> Is where the heart is?</h1>];
    	//return <Fragment><Home /><h1 key="heading"> Is where the heart is?</h1></Fragment>
    	//return <Home message={this.state.message} updateMessage={this.updateMessage}/>;
    	return <Home updateMessage={this.updateMessage}/>;
  	}
}

export default App;
