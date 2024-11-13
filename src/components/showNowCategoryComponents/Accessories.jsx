import '../../css/style.css';
import { LoadApiData } from '../../../constants/ContextApi';
import { useContext } from 'react';
import ProductItems from '../ProductItems';
import { useLocation } from 'react-router-dom';

const Accessories = () => {
    const data = useContext(LoadApiData);

    const categoryFromURL = useLocation();
     
    const filterAccessories = data.filter((accessories) => accessories.category.includes(categoryFromURL.pathname.split('/')[2]));

    return (
        <div className={`w-full grid-bx`}>
            {filterAccessories.map((products) => <ProductItems key={products.product_id} product={products}/>)}
        </div>
    );
};

export default Accessories;