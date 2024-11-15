import ProductDetailsCard from '../components/ProductDetailsCard';
import PageHeading from '../components/PageHeading';
import DynamicTitle from '../components/DynamicTitleComponents/DynamicTitle';
import { ScrollRestoration, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const idFromURL = useParams();

    return (
        <>
            <DynamicTitle title={'Product Details'}/>
            <ScrollRestoration></ScrollRestoration>
            <div className={`w-full`}>
                <div className={`w-full mb-[680px] sm:mb-[555px] md:mb-[900px] lg:mb-[480px]`}>
                    <div className={`relative w-full min-h-[465px] bg-[#9538E2] py-8`}>
                        <div className={`container mx-auto px-4`}>
                            <div className={`w-full relative`}>
                                <PageHeading title={`Product Details`} para={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></PageHeading>
                                <div className={`w-full absolute top-[120%] left-0 lg:top-[130%]`}>
                                    <ProductDetailsCard idFromURL={idFromURL}></ProductDetailsCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;