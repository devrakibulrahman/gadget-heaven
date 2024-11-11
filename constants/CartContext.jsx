import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDataFromCartToLocalStore } from "../src/utilities/LocalStore";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCart, setProductCart] = useState([]);
    // console.log(productCart);
    // const [loadData, setLoadData] = useState([]);
    // console.log(loadData);
    const [saveCartData, setSaveCartData] = useState([]);
    // console.log(saveCartData);

    useEffect(() => {
        fetch('/allProductApi.json')
            .then((res) => res.json())
            .then((data) => setProductCart(data))
            .catch((err) => console.log(err))        
    }, [saveCartData.length]);

    useEffect(() => {
        if(productCart.length){
            const cartData = getDataFromCartToLocalStore();
            setSaveCartData(cartData);

            const productCartData = [];
            for(const id of cartData){
                productCartData.push(id);
            };
            setSaveCartData(productCartData);
            return;
        };
    }, [productCart.length])

    return(
        <CartContext.Provider value={{productCart, setProductCart, saveCartData}}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {CartContext, CartProvider};