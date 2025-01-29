import { createStore } from "redux"
//action creators 
function addItem(product){
    return {
        type:"ADD_ITEM",
        payload: product
    }
}
function updateQuantity(id,quantity){
    return {
        type:"UPDATE_QUANTITY",
        payload: {id,quantity}
    }
}
function removeItem(id){
    return {
        type:"REMOVE_ITEM",
        payload: id
    }
}
function applyDiscount(dis){
    return {
        type:"APPLY_DISCOUNT",
        payload: dis
    }
}

const initialState={
    cartItems:[],
    totalPrice:0,
}
//reducer
function reducer(state=initialState,action){
   if(action.type==="ADD_ITEM"){
    //   state.cartItems=[...state.cartItems,action.payload]
    state.cartItems=(state.cartItems).concat(action.payload)
      return {...state,
        totalPrice:(state.totalPrice)+(action.payload.price*action.payload.quantity)
      }
   }
   else if(action.type==="UPDATE_QUANTITY"){
      for(let i=0;i<state.cartItems.length;i++){
        if(state.cartItems[i].id===action.payload.id){
            state.totalPrice=state.totalPrice-(state.cartItems[i].price*state.cartItems[i].quantity);
            state.cartItems[i].quantity=action.payload.quantity;
            state.totalPrice=state.totalPrice+(state.cartItems[i].price*action.payload.quantity);
        }
      }
      return{
        ...state,
      }
   }
   else if(action.type==="REMOVE_ITEM"){
    for(let i=0;i<state.cartItems.length;i++){
        if(state.cartItems[i].id===action.payload){
          state.totalPrice=(state.totalPrice)-(state.cartItems[i].price*state.cartItems[i].quantity)
          state.cartItems.splice(i,1);
        }
    }
    return {...state}
   }
   else if(action.type==="APPLY_DISCOUNT"){
       state.totalPrice=state.totalPrice-(((state.totalPrice)/100)*action.payload)  ;
       return {...state}
   }
   else{
    return state
   }
}

const store=createStore(reducer);
console.log("initialState:",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("updateState:",store.getState());
})

store.dispatch(addItem({id:1,name:"Laptop",price:1000,quantity:1}));
store.dispatch(addItem({ id: 2, name: "Mouse", price: 50, quantity: 2 }));
store.dispatch(updateQuantity(2,3));
store.dispatch(removeItem(1));
store.dispatch(applyDiscount(20));
unsubscribe();
store.dispatch(removeItem(1));