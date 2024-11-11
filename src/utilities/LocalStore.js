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
const deleteDataFromLocalStore = (productId) => {
    const cart = getDataFromCartToLocalStore();
    const deleteData = cart.filter((remove) => remove.product_id !== productId.product_id);
    setDataToCartLocalStore(deleteData);
};

// add data to LocalStore (add to cart) ------------->
const addDataToLocalStore = (productId) => {
    const dataFromLocalStore = getDataFromCartToLocalStore();
    dataFromLocalStore.push(productId);
    setDataToCartLocalStore(dataFromLocalStore);
};

// data get from LocalStore (wishlist) -------------->
const getDataFromWishlistToLocalStore = () => {
    const getWishlistData = localStorage.getItem('wishlist');
    if(getWishlistData) {
        const wishlistData = JSON.parse(getWishlistData)
        return wishlistData;
    };
    return [];
};

// data set to LocalStore (wishlist) ---------------->
const setDataToWishlistLocalStore = (product) => {
    const setWishlistData = JSON.stringify(product);
    localStorage.setItem("wishlist", setWishlistData);
};

// delete data from LocalStore (wishlist) ----------->
const deleteDataFromWishlist = (productId) => {
    const wishlist = getDataFromWishlistToLocalStore();
    const deleteData = wishlist.filter((remove) => remove.product_id !== productId.product_id);
    setDataToWishlistLocalStore(deleteData);
};

// add data to LocalStore (wishlist) ---------------->
const addDataToWishlistLocalStore = (productId) => {
    const dataFromLocalStore = getDataFromWishlistToLocalStore();
    dataFromLocalStore.push(productId);
    setDataToWishlistLocalStore(dataFromLocalStore);
};

export { getDataFromCartToLocalStore, setDataToCartLocalStore, addDataToLocalStore, deleteDataFromLocalStore, getDataFromWishlistToLocalStore, setDataToWishlistLocalStore, addDataToWishlistLocalStore, deleteDataFromWishlist };