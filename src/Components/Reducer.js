import React from 'react'



export const Reducer = (state,action) => {
    if(action.type === 'REMOVE_ITEM'){
        return{ ...state,
        item:state.item.filter((curelem)=>{
        return   curelem.id !== action.payload;
        })
    }
}
if(action.type==='CLEAR-CART'){
    return{
    ...state,item:[]
    }
}
if(action.type==="INCREMENT"){
    let updatedCart=state.item.map((curelem)=>{
        if(curelem.id===action.payload){
            return {...curelem,  quantity: curelem.quantity+1 }
        }
        return curelem;
    })
    return {...state,item:updatedCart}

    }
    if(action.type==="DECREMENT"){
        let updatedCart=state.item.map((curelem)=>{
            if(curelem.id===action.payload){
                return{...curelem,quantity:curelem.quantity-1}
            }
            return curelem
        
        }).filter((curelem)=>
            curelem.quantity!==0
        )
        return {...state,item:updatedCart}
    }

            
    if (action.type === "GET-TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }
  
    return state;
}

 