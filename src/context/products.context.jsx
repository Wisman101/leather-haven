import { createContext, useState, useEffect } from "react";
import ProductsData from '../shopData.json';

export const ProductContext = createContext({
    Products: [],
    SetProducts: () => null
});

export const ProductProvider = ({children}) => {
    const [Products, SetProducts] = useState(ProductsData);
    const value = {Products, SetProducts}

    useEffect(() => {
    }, [])

    return <ProductContext.Provider value={value}>{ children }</ProductContext.Provider>
}