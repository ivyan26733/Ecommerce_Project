import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartAmountToggle({amount,setDecrease,setIncrease}) {
  return (
    <div className='cart-button'>
    <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
            <FaMinus className='icons'/>
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
            <FaPlus className='icons'/>
        </button>
    </div>
    </div>
  )
}
