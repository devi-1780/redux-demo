import { createStore } from "redux";
//action creator
function orderCake(){
    return{
        type:"ORDER_CAKE"
    }
}

function updateCakes(){
    return{
        type:"UPDATE_CAKE"
    }
}
//reducer
const initialState={
    numOfCakes:10
}
function reducer(state=initialState,action){
    if(action.type==="ORDER_CAKE"){
        return {...state,numOfCakes:state.numOfCakes-1}
    }
    else if(action.type==="UPDATE_CAKE"){
        return {...state,numOfCakes:state.numOfCakes+1}
    }
    else{
        return state;
    }
    
}
//store
const store=createStore(reducer);
console.log("initialState:", store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("updatedState:",store.getState());
})
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(updateCakes());
store.dispatch(updateCakes());

