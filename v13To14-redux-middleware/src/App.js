import React, { Component } from 'react';
//import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import store from "./store-redux"
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
		return(
    	//return [<Home key="home" />,<h1 key="heading"> Is where the heart is?</h1>];
    	//return <Fragment><Home /><h1 key="heading"> Is where the heart is?</h1></Fragment>
    	//return <Home message={this.state.message} updateMessage={this.updateMessage}/>;
    	<Provider store={store}>
    		<Home updateMessage={this.updateMessage}/>
    	</Provider>
    	);
  	}
}

export default App;
