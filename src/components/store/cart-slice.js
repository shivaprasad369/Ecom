import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        item:[],
        totalQuantity:0,
        },
        reducers:{
            addItemTocart(state,actions){
                const newItem=actions.payload;
                const existingItem=state.item.find(item=>item.id===newItem.id)
                state.totalQuantity++;
                if(!existingItem){
                    state.item.push({
                        id:newItem.id,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.price,
                        name:newItem.title
                    })
                }else{
                    existingItem.quantity++;
                    existingItem.totalPrice+=newItem.price
                }
            },
            removeItemFromCart(state,actions){
                const id=actions.id;
                const existingItem=state.item.find(item=>item.id===id)
                state.totalQuantity--;
                if(existingItem.quantity===1){
                    state.item=state.item.filter(item=>item.id !==id)

                }else{
                    existingItem.quantity--;
                    existingItem.totalPrice-=existingItem.price
                }
            }
        }
})
export const cartAction=cartSlice.actions
export default cartSlice;