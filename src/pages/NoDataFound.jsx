
const NoDataFound = ({cate}) => {
    return (
        <div className={`w-full min-h-[318px] flex flex-col items-center justify-center gap-y-[50px] sm:min-h-[526px] md:min-h-[562px] lg:min-h-[602px] xl:min-h-[634px]`}>
            <div className={`w-full max-w-[150px] md:max-w-[200px]`}>
                <img src="/img/NoData.svg" alt="no data found image" />
            </div>
            <div className={`w-full text-center`}>
                <h1  className={`font-sora text-2xl leading-[40px] font-bold text-[#0B0B0B] md:text-xl md:leading-[30px] lg:text-2xl lg:leading-[35px] xl:text-3xl xl:leading-[40px]`}>{`"${cate}" Is Not Available`}</h1>
            </div>
        </div>
    );
};

export default NoDataFound;