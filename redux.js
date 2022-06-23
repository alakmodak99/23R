//actions
// const Increment_Count ="Increment_Count"
// const Decrement_Count = "Decrement_Count"
// //Increment_Count
// const IncrementCount= (payload)=>{
//     return {
//         type: Increment_Count,
//         payload:payload
//     }
// }
// //Decrement_Count
// const DecrementCount= (payload)=>{
//     return {
//         type: Decrement_Count,
//         payload:payload
//     }
// }
// reducers
const reducers= (state, action)=>{
    const {type, payload} = action;
    switch (type){
        case 'Increment_Count' : 
        return {...state, counter : state.counter + payload}
        // case Decrement_Count : 
        // return {...state, counter : state.counter - payload}
        default : 
        return state;
    }
}

//store
//store the state of application
//access the data present in the store
//modify the data -> dispatch(action)
const createStore =(reducers, initialState={counter:0}) => {
    const store ={};
    store.state= initialState;
    store.getState=()=> store.state
    store.dispatch =(action)=>{
        store.state = reducers(store.state, action)
    }
     return store
}

const A =createStore(reducers, {counter: 40})
console.log(A)
console.log(A.getState())
A.dispatch({type: 'Increment_Count', payload: 20})
console.log(A.getState())
// console.log(A)
// A.dispatch(DecrementCount(10))
// console.log(A.getState())
// console.log(A)