import ProductDetailsCard from '../components/ProductDetailsCard';

const ProductDetails = () => {

    return (
        <div className={`w-full`}>
            <div className={`w-full min-h-[109vh] sm:min-h-[110vh] md:min-h-[140vh] lg:min-h-[90vh]`}>
                <div className={`relative w-full min-h-[465px] bg-[#9538E2]`}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full relative`}>
                            <div className={`w-full flex flex-col items-center justify-center pt-8`}>
                                <h1 className={`font-sora text-2xl leading-7 font-bold text-[#FFFFFF] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-10`}>Product Details</h1>
                                <div className={`w-full max-w-[795px] text-center mt-4`}>
                                    <p className={`font-sora text-sm leading-[26px] font-light text-[#FFFFFF] md:text-base`}>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                </div>
                            </div>
                            <div className={`w-full absolute top-[120%] left-0 lg:top-[130%]`}>
                                <ProductDetailsCard></ProductDetailsCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;