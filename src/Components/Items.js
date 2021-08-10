import React,{useContext} from 'react'
import {cartcontext} from './Cart'




export const Items = ({id,description,title,img,price,amount,quantity}) => {
    const {removeitem,increment,decrement} = useContext(cartcontext)
    return (
      
        <div>
                    <div className="items-info">
                            <div className="product-img">
                                <img src={img} alt=""/>
                            </div>
                            <div className="title">
                                <h2>{title}</h2>
                                <p>black col</p>
                            </div>
                            <div className="add-minus-quantity">
                            <i className="fas fa-minus minus" onClick={()=>decrement(id)} ></i>
                                <input type="text" placeholder={quantity}></input>
                                <i className="fas fa-plus add" onClick={()=>increment(id)}></i>
                            </div>
                            <div className="price">
                                <h3>{price}</h3>
                            </div>
                            <div className="remove-item">
                            <i  className="fas fa-trash-alt remove" onClick={()=>removeitem(id)}/>
 
                               </div>
                               
                        </div>
        </div>
    )
}
