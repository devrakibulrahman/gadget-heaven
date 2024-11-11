import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DeleteCart = createContext();

const DeleteCartProvider = ({children}) => {
    const [deleteCartData, setDeleteCartData] = useState([]);
    
    return(
        <DeleteCart.Provider value={{deleteCartData, setDeleteCartData}}>
            {children}
        </DeleteCart.Provider>
    );
};

DeleteCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {DeleteCart, DeleteCartProvider};