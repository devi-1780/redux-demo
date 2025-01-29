//action creator 
//reducer
//store 
 
import { createStore } from "redux";
//action creators
const ORDER_CHOCOLATE="ORDER_CHOCOLATE";
const UPDATE_CHOCOLATE="UPDATE_CHOCOLATE";
function orderChocolate(){
    return {
        type:ORDER_CHOCOLATE
    }
}
function updateChocolate(count){
    return {
        type:UPDATE_CHOCOLATE,
        playload:count
    }
}

const initialState={
    numOfChocolates:10
}
//reducer =it is a pure javascript function 

function reducer(state=initialState,action){
    switch(action.type){
        case "ORDER_CHOCOLATE":
            return {
                ...state,
                numOfChocolates:state.numOfChocolates-1
            }
        case "UPDATE_CHOCOLATE":
            return {
                ...state,
                numOfChocolates:state.numOfChocolates+5
            }
        default:
            return state    
    }
}

const store=createStore(reducer);

console.log("initialState:",store.getState());

const unsubscribe= store.subscribe(()=>{
    console.log("updatedState:",store.getState())
})

store.dispatch(orderChocolate());
store.dispatch(orderChocolate());
store.dispatch(orderChocolate());
store.dispatch(orderChocolate());
store.dispatch(updateChocolate());
unsubscribe();
store.dispatch(updateChocolate()); 