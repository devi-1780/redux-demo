 const initialState={
    cartItems:[],
    totalPrice:1100,
}
let cartItems=[{id:1,name:"Laptop",price:1000,quantity:1},{ id: 2, name: "Mouse", price: 50, quantity: 2 }];
let totalPrice=1100;
// console.log(cartItems);
const id=1;
const qua=3;
for(let i=0;i<cartItems.length;i++){
   if(cartItems[i].id===id){
    cartItems[i].quantity=cartItems[i].quantity+qua
    // totalPrice=totalPrice-(cartItems[i].price*cartItems[i].quantity);
    //  cartItems.splice(i,1);
    
     console.log(cartItems);
    //  console.log(totalPrice)
   }
   
}

let price=150;
let dis=20;
let am=price-((price/100)*dis);
console.log(am,"am....")

