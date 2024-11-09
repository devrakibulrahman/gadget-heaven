import ProductWishListCard from "./ProductWishListCard";

const ProductWishList = () => {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-y-3 md:gap-y-4 lg:gap-y-6`}>
            <ProductWishListCard></ProductWishListCard>
            <ProductWishListCard></ProductWishListCard>
            <ProductWishListCard></ProductWishListCard>
        </div>
    );
};

export default ProductWishList;