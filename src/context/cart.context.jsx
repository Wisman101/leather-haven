import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemTocart: () => {},
    totalCount: 0
})

const addCartItem = (cartItems, productToAdd) => {
    const existingcartItem = cartItems.find((item) => item.id === productToAdd.id)

    if(existingcartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id 
            ? {...item, quantity: item.quantity + 1 }
            : item 
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCount, setTotalItemcount] = useState(0);

    const addItemTocart = (product) => {
        setCartItems(addCartItem(cartItems, product));
        setTotalItemcount(totalCount + 1);
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemTocart, totalCount}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}