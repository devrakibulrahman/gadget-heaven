import '../../css/style.css';
import { LoadApiData } from '../../../constants/ContextApi';
import { useContext } from 'react';
import ProductItems from '../ProductItems';

const AllProducts = () => {
    const data = useContext(LoadApiData)

    return (
        <div className={`w-full grid-bx`}>
            {data.map((products) => <ProductItems key={products.product_id} product={products}/>)}
        </div>
    );
};

export default AllProducts;