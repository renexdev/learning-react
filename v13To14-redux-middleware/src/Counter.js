import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from "./actions-redux"
//import connect from "./connect";


export function Counter({n, inc, dec}){
	//const inc = () => send(increment(step));
	//const dec = () => send(increment(-step));
	return(
		<div>
    		<button onClick={inc}> + </button>
    		<h2>{n}</h2>
    		<button onClick={dec}> - </button>
		</div>
	);

}
//Map dispatch props mapDispatchToProps
export default connect(state => state, (dispatch,props)=>({
	inc: () => dispatch(increment(props.step)),
	dec: () => dispatch(increment(-props.step)),
}))(Counter)