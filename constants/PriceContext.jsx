import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { getDataFromCartToLocalStore, getTotalPriceDataFromLocalStore } from "../src/utilities/LocalStore";

const PriceContext = createContext();

const PriceProvider = ({children}) => {
    const [item, setItem] = useState([]);
    const [randomNum, setRandomNum] = useState(0);

    const handleGenerateRandomNum = () => {
        const random = Math.floor(Math.random() * 10) + 1;
        setRandomNum(random);
    };

    useEffect(() => {
        const price = getTotalPriceDataFromLocalStore();
        setItem(price)
    }, [randomNum]);
    
    
    return(
        <PriceContext.Provider value={{item, setItem, handleGenerateRandomNum}}>
            {children}
        </PriceContext.Provider>
    );
};

PriceProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PriceContext, PriceProvider };