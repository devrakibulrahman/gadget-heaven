import '../../css/style.css';
import { LoadApiData } from '../../../constants/ContextApi';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItems from '../ProductItems';

const SmartWatch = () => {
    const data = useContext(LoadApiData);

    const categoryFromURL = useLocation();
    
    const filterSmartwatch = data.filter((watch) => watch.category.includes(categoryFromURL.pathname.split('/')[1]));

    return (
        <div className={`w-full grid-bx`}>
            {filterSmartwatch.map((products) => <ProductItems key={products.product_id} product={products}/>)}
        </div>
    );
};

export default SmartWatch;