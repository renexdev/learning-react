import {inc} from "./actions"

export const increment = inc(1);
export const decrement = inc(-1);

export function createStore(initialState){
	let currentState = initialState;
	const listeners = [];

	const getState = () => currentState;

	//currentState.foo.bar ={}
	const dispatch = action => {
		currentState = action(currentState);
		listeners.forEach(l => l(currentState))
	}

	const subscribe = callback => {
		listeners.push(callback);
	};

	const unsubscribe = callback => {
		if (listeners.includes(callback)){
			listeners.splice(listeners.indexOf(callback));
		}
	};

	return  {getState, dispatch, subscribe, unsubscribe};
}