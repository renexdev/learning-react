import React from 'react'
import {createStore} from "./store";

const defaultStore = createStore({n: 1});

export default function connect(selector = ()=> ({}), store = defaultStore){
	return Component =>
		class extends React.Component{
			state =store.getState();

			refresh = newState 	=> {
				if (this.mounted){
					this.setState(newState);
				}
			}
			//Evitar race conditions
			componentDidMount(){
				console.log(`Counter: componentDidMount at ${new Date().getMilliseconds()} ms`);
				this.mounted = true;
				store.subscribe(this.refresh);
			}
		    //Evitar race conditions
			componentWillUnmount(){
		     	console.log(`Counter: componentWillUnmount at ${new Date().getMilliseconds()} ms`);
				this.mounted = false;
				store.unsubscribe(this.refresh);
			}

			render() {
				return (
					<Component 
						{...this.props} //props whatever the parent provided
						{...selector(store.getState(), this.props)} //Current app state form getState, props pass down from the parent
						dispatch={store.dispatch}
					/>
				);
			}
		};
}