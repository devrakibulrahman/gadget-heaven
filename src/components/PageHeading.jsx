import PropTypes from 'prop-types';

const PageHeading = ({title, para}) => {
    return (
        <div className={`w-full`}>
            <div className={`w-full flex flex-col items-center justify-center`}>
                <h1 className={`font-sora text-2xl leading-7 font-bold text-[#FFFFFF] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-10`}>{title}</h1>
                <div className={`w-full max-w-[795px] text-center mt-4`}>
                    <p className={`font-sora text-sm leading-[26px] font-light text-[#FFFFFF] md:text-base`}>{para}</p>
                </div>
            </div>
        </div>
    );
};

PageHeading.propTypes = {
    title: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired
};

export default PageHeading;