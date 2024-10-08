import React, { useReducer,useEffect } from 'react'
import { useContext,createContext } from 'react'
import { useProductProvider } from './ProductContext';
import reducer from './../reducers/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
      filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};


const FilterContextProvider = ({children}) => {

    const {products} = useProductProvider();
    // console.log(products)
    const [state , dispatch] = useReducer(reducer , initialState);

    // to set grid view
    const setGridView = () => {
        return dispatch({type:"SET_GRID_VIEW"})
    }

    const setListView = () => {
        return dispatch({type:"SET_LIST_VIEW"})
    }

    // sorting Function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:userValue})
    }

    // to set filters
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    }
    // to clear the filters
    const clearFilters = () => {
        dispatch({type:"CLEAR_FILTERS"})
    }


    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    },[products,state.sorting_value,state.filters])    

    useEffect(() => {
        dispatch({
            type: "LOAD_FILTER_PRODUCTS",
            payload: products,
        });
    },[products])

  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}


export {FilterContextProvider , useFilterContext , FilterContext}