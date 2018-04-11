//const state = {n: 0}
export const inc = step => state =>({...state, n: state.n + step });
//export const increment = state => ({...state, n: state.n + 1 });
//export const decrement = state => ({...state, n: state.n - 1 });
export const increment = inc(1);
export const decrement = inc(-1);