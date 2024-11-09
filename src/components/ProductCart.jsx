import ProductCartCard from "./ProductCartCard";

const ProductCart = () => {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-y-3 md:gap-y-4 lg:gap-y-6`}>
            <ProductCartCard></ProductCartCard>
            <ProductCartCard></ProductCartCard>
            <ProductCartCard></ProductCartCard>
        </div>
    );
};

export default ProductCart;