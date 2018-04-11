import React, { Component } from 'react';
import {createStore, increment, decrement} from "./store.js"

const counterStore = createStore({n: +100000});

export default class Counter extends Component {
	state =counterStore.getState();

	refresh = newState 	=> {
		if (this.mounted){
			this.setState(newState);
		}
	}
	//Evitar race conditions
	componentDidMount(){
		console.log(`Counter: componentDidMount at ${new Date().getMilliseconds()} ms`);
		this.mounted = true;
		counterStore.subscribe(this.refresh);
	}
    //Evitar race conditions
	componentWillUnmount(){
     	console.log(`Counter: componentWillUnmount at ${new Date().getMilliseconds()} ms`);
		this.mounted = false;
		counterStore.unsubscribe(this.refresh);
	}

	inc = () => counterStore.dispatch(increment);
	dec = () => counterStore.dispatch(decrement);
	render() {
		return(
			<div>
        		<button onClick={this.inc}> + </button>
        		<h2>{this.state.n}</h2>
        		<button onClick={this.dec}> - </button>

			</div>
			);
	}
}