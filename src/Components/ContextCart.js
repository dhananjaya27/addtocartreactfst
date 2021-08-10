

import React from 'react'
import{useContext} from 'react'
import { cartcontext } from './Cart'
import { Items } from './Items'

export const ContextCart = () => {
    const {item,clearcart,totalItem,totalAmount} = useContext(cartcontext)
    return (
        <div>
             <header>
                <div className='continue-shopping'>
                    <img src="./images/arrow.png" alt="arrow" className=" arrow-icon"/>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItem}</span></p>

                <div className="cart-items">

                     <div className="cart-item-container">
                         {
                         item.map((curItem)=>{
                            console.log(curItem)
                                //  <items key={curidItem.} {...curItem}/> 
                               return <Items key={curItem.id} {...curItem}/>
                         })}
                          <hr/>
                    </div>
                </div>
                <div className="card-total">
                    <h3>carttotal<span>{totalAmount}</span></h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearcart}>
            Clear Cart
          </button>
                </div>

            </section>
        </div>
    )
}
