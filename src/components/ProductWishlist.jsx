import { useContext } from "react";
import { WishListContext } from "../../constants/WishListContext";
import ProductWishListCard from "./ProductWishListCard";

const ProductWishList = () => {
    const {saveWishListData} = useContext(WishListContext);

    return (
        <div className={`w-full flex flex-col items-center justify-center gap-y-3 md:gap-y-4 lg:gap-y-6`}>
            {
                saveWishListData.map((wishlist, idx) => <ProductWishListCard key={idx} wishlist={wishlist}></ProductWishListCard>)
            }
        </div>
    );
};

export default ProductWishList;