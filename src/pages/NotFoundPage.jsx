import DynamicTitle from '@/components/DynamicTitleComponents/DynamicTitle';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const pageNavigate = useNavigate();

    const handleBackToHome = () => {
        pageNavigate('/');
    };

    return (
        <>
            <DynamicTitle title={'Page Not Found'}/>
            <div className={`w-full min-h-[700px] flex flex-col items-center justify-center`}>
                <div className={`w-full max-w-[250px] md:max-w-[300px]`}>
                    <img src="/img/404.svg" alt="404 image" />
                </div>
                <div className={`w-full text-center flex items-center justify-center flex-col mt-6`}>
                    <h1 className={`font-sora text-2xl leading-[45px] font-bold text-[#09080F] md:text-3xl`}>Page Not Found</h1>
                    <div className={`w-full max-w-[500px] mt-4 px-4`}>
                        <p className={`font-sora text-base leading-[32px] font-light text-[#09080F99]`}>Oops! The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.</p>
                    </div>
                </div>
                <div className={`w-full flex items-center justify-center mt-[30px]`}>
                    <button onClick={handleBackToHome} className={`w-[200px] min-h-[60px] bg-[#09080F] rounded-md font-sora text-base leading-[25px] font-semibold text-white`}>Back To Home page</button>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;