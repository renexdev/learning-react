import React, { Component } from 'react';
import {inc as increment} from "./actions"
import connect from "./connect";


export function Counter({step, n, send}){
	//const inc = () => send(increment(step));
	//const dec = () => send(increment(-step));
	return(
		<div>
    		<button onClick={send(increment(step))}> + </button>
    		<h2>{n}</h2>
    		<button onClick={send(increment(-step))}> - </button>
		</div>
	);

}
export default connect(state => state)(Counter)