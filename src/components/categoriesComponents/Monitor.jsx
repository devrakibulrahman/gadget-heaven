import NoDataFound from "@/pages/NoDataFound";

const Monitor = ({cate}) => {
    return (
        <div className={`w-full`}>
            <NoDataFound cate={cate}></NoDataFound>
        </div>
    );
};

export default Monitor;