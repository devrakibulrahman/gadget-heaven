import ProductDetailsCard from '../components/ProductDetailsCard';
import PageHeading from '../components/PageHeading';

const ProductDetails = () => {

    return (
        <div className={`w-full`}>
            <div className={`w-full mb-[545px] sm:mb-[555px] md:mb-[850px] lg:mb-[400px]`}>
                <div className={`relative w-full min-h-[465px] bg-[#9538E2]`}>
                    <div className={`container mx-auto px-4`}>
                        <div className={`w-full relative`}>
                            <PageHeading></PageHeading>
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