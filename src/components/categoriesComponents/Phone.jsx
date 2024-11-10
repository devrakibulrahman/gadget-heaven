import '../../css/style.css';
import { LoadApiData } from '../../../constants/ContextApi';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItems from '../ProductItems';

const Phone = () => {
    const data = useContext(LoadApiData);

    const categoryFromURL = useLocation();

    const filterPhone = data.filter((phone) => phone.category.includes(categoryFromURL.pathname.split('/')[1]));

    return (
        <div className={`w-full grid-bx`}>
            {filterPhone.map((products) => <ProductItems key={products.product_id} product={products}/>)}
        </div>
    );
};

export default Phone;