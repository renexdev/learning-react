const incrementApi = n => Promise.resolve();


export function incrementOld(step){
	return{
		type: "INCREMENT",
		n: step
	}
}

export function increment(step){
	return dispatch =>
		incrementApi(step).then(()=>{
			dispatch({
				type: "INCREMENT",
				n: step
			});
		})
}
