import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

const Cart:NextPage = () => {
  return (
    <div className='container3 '>
      <div className="left">
        <table className='table'>
            <tr className='tr'>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
              <td>
              <div className="imgContainer">
                <Image src="/img/pizza.png" objectFit='cover' alt="" layout='fill' />
              </div>
              </td>
              <td>
                <span className="name">CORALZO</span>
              </td>
              <td>
                <span className="extras">Double Ingredients,spicy sauce</span>
              </td>
              <td>
                <span className="price">$19.90</span>
              </td>
              <td>
                <span className="quantity">2</span>
              </td>
              <td>
                <span className="total">$39.90</span>
              </td>
            </tr>
        </table>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Cart
