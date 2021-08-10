import React,{createContext ,useReducer,useEffect} from 'react'
import "./Cart.css"


import {products} from './products'
import { ContextCart } from './ContextCart'
import { Reducer } from './Reducer'

export const cartcontext=createContext()
const initialState={
    item:products,
    totalItem:0,
    totalAmount:0
}

 const Cart = () => {
    // const [item, setitem] = useState(products)
    const [state, dispatch] = useReducer(Reducer, initialState)

    //for delete items
    function removeitem(id){
          return dispatch(
              {
                  type:"REMOVE_ITEM",
                  payload:id
              }
          )
    };

    //clear cart
    const clearcart=()=>{
        return dispatch({
            type:"CLEAR-CART",
        })
    }

    //item increment
    const increment=(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id
        }
        )
    }

    //item decrement
    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }

    useEffect(() => {
        return dispatch({
            type:"GET-TOTAL"
        })
     }, [state.item])
     
    return (
        <>
        <cartcontext.Provider value={{...state,removeitem,clearcart,increment,decrement}}>
           <ContextCart/>
           </cartcontext.Provider>
        </>
    )
}
export default Cart
