import '../../css/style.css';
import { LoadApiData } from '../../../constants/ContextApi';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItems from '../ProductItems';

const Laptops = () => {
    const data = useContext(LoadApiData);
    const categoryFromURL = useLocation();
    const filterLaptops = data.filter((laptops) => laptops.category.includes(categoryFromURL.pathname.split('/')[2]));

    return (
        <div className={`w-full grid-bx`}>
            {
                filterLaptops.map((products) => <ProductItems key={products.product_id} product={products}/>)
            }
        </div>
    );
};

export default Laptops;