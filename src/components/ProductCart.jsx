import { useContext } from "react";
import { CartContext } from "../../constants/CartContext";
import ProductCartCard from "./ProductCartCard";

const ProductCart = () => {
    const {saveCartData} = useContext(CartContext);
    
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-y-5 md:gap-y-4 lg:gap-y-6`}>
            {
                saveCartData.map((cart, idx) => <ProductCartCard key={idx} cart={cart}></ProductCartCard>)
            }
        </div>
    );
};

export default ProductCart;