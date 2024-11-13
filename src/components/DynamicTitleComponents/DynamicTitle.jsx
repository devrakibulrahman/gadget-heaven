import { Helmet } from "react-helmet";

const DynamicTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - Gadget Heaven</title>
        </Helmet>
    );
};

export default DynamicTitle;