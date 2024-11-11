import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDataFromCartToLocalStore, deleteDataFromLocalStore } from "../src/utilities/LocalStore";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCart, setProductCart] = useState([]);
    const [saveCartData, setSaveCartData] = useState([]);
    console.log(saveCartData);

    const handleDeleteToCart = (data) => {
        const removeData = saveCartData.filter((remData) => remData.product_id !== data.product_id);
        setSaveCartData(removeData);
        deleteDataFromLocalStore(data)
    };

    useEffect(() => {
        fetch('/allProductApi.json')
            .then((res) => res.json())
            .then((data) => setProductCart(data))
            .catch((err) => console.log(err))        
    }, []);

    useEffect(() => {
        if(productCart.length){
            const cartData = getDataFromCartToLocalStore();
            setSaveCartData(cartData);

            const productCartData = [];
            for(const id of cartData){
                const findData = productCart.find((product) => product.product_id === id.product_id);
                if(findData){
                    productCartData.push(findData);
                }
            };
            setSaveCartData(productCartData);
        };
    }, [productCart])

    return(
        <CartContext.Provider value={{productCart, setProductCart, saveCartData, handleDeleteToCart}}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {CartContext, CartProvider};