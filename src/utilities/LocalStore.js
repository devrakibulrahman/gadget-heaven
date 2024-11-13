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

// add data to LocalStore (add to cart) ------------->
const addDataToLocalStore = (productId) => {
    const dataFromLocalStore = getDataFromCartToLocalStore();
    dataFromLocalStore.push(productId);
    setDataToCartLocalStore(dataFromLocalStore);
};

// delete data from LocalStore ---------------------->
const deleteDataFromLocalStore = (productId) => {
    const cart = getDataFromCartToLocalStore();
    const deleteData = cart.filter((remove) => remove.product_id !== productId.product_id);
    setDataToCartLocalStore(deleteData);
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

// add data to LocalStore (wishlist) ---------------->
const addDataToWishlistLocalStore = (productId) => {
    const dataFromLocalStore = getDataFromWishlistToLocalStore();
    dataFromLocalStore.push(productId);
    setDataToWishlistLocalStore(dataFromLocalStore);
};

// delete data from LocalStore (wishlist) ----------->
const deleteDataFromWishlist = (productId) => {
    const wishlist = getDataFromWishlistToLocalStore();
    const deleteData = wishlist.filter((remove) => remove.product_id !== productId.product_id);
    setDataToWishlistLocalStore(deleteData);
};

// get total price from local Store ----------------->
const getTotalPriceDataFromLocalStore = () => {
    const getTotalPrice = localStorage.getItem('TotalPrice');
    if(getTotalPrice){
        const totalPrice = JSON.parse(getTotalPrice);
        return totalPrice;
    };
    return [];
};

// set total price to local store ------------------->
const setTotalPriceDataToLocalStore = (price) => {
    const itemsPrice = JSON.stringify(price);
    localStorage.setItem('TotalPrice', itemsPrice);
};

// add total price to setItem ----------------------->
const addTotalPriceToSetItem = (productPrice) => {
    const totalPriceData = getTotalPriceDataFromLocalStore();
    totalPriceData.push(productPrice);
    setTotalPriceDataToLocalStore(totalPriceData);
};

// delete total price from local store -------------->
const deleteTotalPriceToLocalStore = () => {
    localStorage.removeItem('TotalPrice');
};

export { getDataFromCartToLocalStore, setDataToCartLocalStore, addDataToLocalStore, deleteDataFromLocalStore, getDataFromWishlistToLocalStore, setDataToWishlistLocalStore, addDataToWishlistLocalStore, deleteDataFromWishlist, getTotalPriceDataFromLocalStore, setTotalPriceDataToLocalStore, addTotalPriceToSetItem, deleteTotalPriceToLocalStore };