import React, { Component } from 'react';
//import React, { Component, Fragment } from 'react';
import Home from "./Home";
import './App.css';

class App extends Component {
	state = { error: false, errorInfo: null };
	componentDidCatch(){
		this.setState({error: true});
	}
	render() {
  		if(this.state.error){
  			return <h1>Woops!</h1>
  		}
    	//return [<Home key="home" />,<h1 key="heading"> Is where the heart is?</h1>];
    	//return <Fragment><Home /><h1 key="heading"> Is where the heart is?</h1></Fragment>
    	return <Home />;
  	}
}

export default App;
