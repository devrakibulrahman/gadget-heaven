import '../css/style.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItems = ({product}) => {
    const {product_id, product_title, product_image, price} = product;
    
    const pageNavigate = useNavigate();

    const handlePageNavigate = (productId) => {
        pageNavigate(`/product details/${productId}`);
    };

    return (
        <div className={`w-full max-w-[400px] min-h-[380px] bg-white p-5 rounded-2xl sm:max-w-[450px] md:p-6 lg:min-h-[500px] xl:min-h-[500px] flex flex-col`}>
            <div className={`w-auto flex-grow`}>
                <div className={`w-full h-[240px] bg-[#D9D9D9] rounded-xl overflow-hidden sm:h-[300px] xl:h-[200px] 2xl:h-[240px]`}>
                    <img src={product_image} alt="product image" className={`w-full h-full object-cover`}/>
                </div>
                <div className={`w-full mt-6 flex flex-col justify-start gap-y-1 md:gap-y-2 lg:gap-y-3`}>
                    <h1 className={`font-sora text-lg leading-[20px] font-semibold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>{product_title}</h1>
                    <p className={`font-sora text-base leading-[25px] font-medium text-[#09080F99] md:text-lg lg:text-xl`}>Price : ${price}</p>
                </div>
            </div>
            <div className={`w-full mt-4`}>
                <button onClick={() => handlePageNavigate(product_id)} className={`radial-btn w-[130px] h-[48px] rounded-full flex items-center justify-center p-[2px] md:w-[140px] md:h-[50px] lg:w-[165px] lg:h-[52px]`}>
                    <div className={`btn-bg flex items-center justify-center gap-x-2 bg-white w-full h-full rounded-full btn-bg-transition`}>
                        <span  className={`font-sora text-sm leading-[26px] font-semibold md:text-base lg:text-lg`}>View Details</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

// props validate here ----------------------------->
ProductItems.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItems;