import { createSlice } from "@reduxjs/toolkit";



createSlice({
name:'cart',
initialState:{
    items:[],
    totalQuantity:0,
    totalamount:0
},
reducers:{
addItemToCart(state,action){
    const newItem=action.payload;
    const existingItems=state.items.find(item=>item.id===newItem.id);
    if(existingItems){
        state.items.push({
            itemId:newItem.id,
            price:newItem.price,
            quantity:1,
            totalPrice:newItem.price,
            title:newItem.title
        })
    }
    else{
        existingItems.quantity++;
       existingItems.totalPrice = existingItems.totalPrice+newItem.price
    }
},
removeItemFromCart(){}

}

})