// data get from LocalStore ------------------------->
const getDataFromCartToLocalStore = () => {
    const getCartData = localStorage.getItem('cart');
    if(getCartData) {
        const cartData = JSON.parse(getCartData);
        return cartData;
    };
    return [];
};

// data set To LocalStore --------------------------->
const setDataToCartLocalStore = (cart) => {
    const setCartData = JSON.stringify(cart);
    localStorage.setItem("cart", setCartData);
};

// delete data from LocalStore ---------------------->
const deleteDataFromLocalStore = (cartId) => {
    const cart = getDataFromCartToLocalStore();
    const deleteData = cart.filter((remove) => remove.product_id !== cartId.product_id);
    setDataToCartLocalStore(deleteData);
};

// add data to LocalStore --------------------------->
const addDataToLocalStore = (productId) => {
    const dataFromLocalStore = getDataFromCartToLocalStore();
    dataFromLocalStore.push(productId);
    setDataToCartLocalStore(dataFromLocalStore);
};



export { getDataFromCartToLocalStore, setDataToCartLocalStore, addDataToLocalStore, deleteDataFromLocalStore };