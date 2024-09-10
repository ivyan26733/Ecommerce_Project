import { createContext,useContext,useEffect,useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";



const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}


const AppProvider =  ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"API_PRODUCTS" , payload:products})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get();
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT" , payload:singleProduct})
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }

    useEffect(() => {
        getProducts(API);
        // getSingleProduct(API);
    },[])

    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
} 

const useProductProvider = () => {
    return useContext(AppContext);
}

export {AppContext , AppProvider, useProductProvider};