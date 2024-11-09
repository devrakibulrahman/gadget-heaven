import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const LoadApiData = createContext();

const LoadData = ({children}) => {
    // state declare here ------------------------------>
    const [loadData, setLoadData] = useState([]);

    // load data from fake api ------------------------->
    useEffect(() => {
        fetch('/allProductApi.json')
            .then((res) => res.json())
            .then((data) => setLoadData(data))
            .catch((err) => console.log(err))
    },[]);

    return (
        <LoadApiData.Provider value={loadData}>
            {children}
        </LoadApiData.Provider>
    );
};

LoadData.propTypes = {
    children: PropTypes.node.isRequired,
};

export {LoadApiData, LoadData};