import { createContext,useContext,useReducer,useEffect } from 'react'
import reducer from './../reducers/CartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("Ivyan")
    if(localCartData) {
        return JSON.parse(localCartData)
    } else {
        return []
    }
}

const initialState = {
    // cart:[],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const Cart_context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setIncrement = (id) => {
         dispatch({type:"INCREMENT" , payload: id})
    }

    const setDecrement = (id) => {
         dispatch({type:"DECREMENT" , payload: id})
    }

    const clearCart = () => {
         dispatch({type:"CLEAR_CART"})
    }

    const addToCart = (id, color, amount, product) => {
        dispatch({type:"ADD_TO_CART", payload: {id, color, amount, product}})
    }

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload: id})
    }

    // to get the total item amount from the local storage


  
    useEffect(() => {
        dispatch({type: "CART_TOTAL_ITEM"})
        // dispatch({type:"GET_TOTAL_AMOUNT"})
        dispatch({type:"CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("Ivyan",JSON.stringify(state.cart))
    },[state.cart])



  return (
    <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrement,setIncrement}}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {Cart_context,useCartContext}