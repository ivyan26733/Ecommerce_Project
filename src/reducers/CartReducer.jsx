const CartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let { id, color, amount, product } = action.payload;
        // console.log(newItem);
        // console.log(existItem);
        // let cartProduct;

        // tackle the existing product
        let existingProduct = state.cart.find(
            (curItem) => curItem.id === id + color
          );

        
          if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
              if (curElem.id === id + color) {
                let newAmount = curElem.amount + amount;
      
                if (newAmount >= curElem.max) {
                  newAmount = curElem.max;
                }
                return {
                  ...curElem,
                  amount: newAmount,
                };
              } else {
                return curElem;
              }
            });
            return {
              ...state,
              cart: updatedProduct,
            };
          }else{
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
              };
              
              return {...state,
                  cart:[...state.cart , cartProduct],
              }
          }
       
    }

    if(action.type === "REMOVE_ITEM"){
        const id = action.payload;
        const newCart = state.cart.filter(item => item.id!== id);
        state.cart = newCart;
        state.total_item = state.cart.length;
        state.total_amount = state.cart.reduce((total,item) => total + item.price * item.amount,0);
        return {...state}
    }

    if(action.type === "INCREMENT"){
        const id = action.payload;
        const newCart = state.cart.map(item => {
            if(item.id === id){
                item.amount += 1;
            }
            return item;
        })
        state.cart = newCart;
        state.total_item = state.cart.length;
        state.total_amount = state.cart.reduce((total,item) => total + item.price * item.amount,0);
        return {...state}
    }
    if(action.type === "DECREMENT"){
        const id = action.payload;
        const newCart = state.cart.map(item => {
            if(item.id === id){
                item.amount -= 1;
            }
            return item;
        })
        state.cart = newCart;
        state.total_item = state.cart.length;
        state.total_amount = state.cart.reduce((total,item) => total + item.price * item.amount,0);
        return {...state}
    }
    if(action.type === "CLEAR_CART"){
        state.cart = [];
        state.total_item = 0;
        state.total_amount = 0;
        return {...state}
    }
    // if(action.type === "CART_TOTAL_ITEM"){
    //     state.total_item = state.cart.length;
    //     return {...state}
    // }
    if(action.type === "CART_ITEM_PRICE_TOTAL"){
        let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
    }
      
    return state;
}
export default CartReducer;
