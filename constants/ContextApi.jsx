import { createContext } from "react";
import PropTypes from 'prop-types';

const LoadApiData = createContext();

const LoadData = ({Children}) => {
    return (
        <LoadApiData.Provider>
            {Children}
        </LoadApiData.Provider>
    );
};

LoadData.propTypes = {
    Children: PropTypes.node.isRequired
};

export {LoadApiData, LoadData};