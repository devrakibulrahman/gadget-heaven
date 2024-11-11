import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDataFromCartToLocalStore, deleteDataFromLocalStore } from "../src/utilities/LocalStore";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCart, setProductCart] = useState([]);
    const [saveCartData, setSaveCartData] = useState([]);
    console.log(saveCartData)

    const handleDeleteToCart = (data) => {
        const removeData = saveCartData.filter((remData) => remData.product_id !== data.product_id);
        if(removeData){
            toast.success('Delete From Cart !!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        };
        setSaveCartData(removeData);
        deleteDataFromLocalStore(data);
    };

    const sortByDescendingPrice = () => {
        const sortDescendingOrder = saveCartData.map((items) => items.price);
        const descendingPrice = saveCartData.filter((items) => sortDescendingOrder.includes(items.price));
              descendingPrice.sort((a, b) => b.price - a.price);
        setSaveCartData(descendingPrice);
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
        <CartContext.Provider value={{productCart, setProductCart, saveCartData, setSaveCartData, handleDeleteToCart, sortByDescendingPrice}}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {CartContext, CartProvider};