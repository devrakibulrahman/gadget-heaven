import Rakibul from "@/components/AreaChart";
import PageHeading from "../components/PageHeading"
import BarChartDesign from "@/components/Chart";

const Statistics = () => {

    return (
        <div className={`w-full`}>
            <div className={`w-full min-h-[50px] bg-[#9538E2] py-8`}>
                <div className={`container mx-auto px-4`}>
                    <div className={`w-full`}>
                        <PageHeading title={`Statistics`} para={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></PageHeading>
                    </div>
                </div>
            </div>
            <div className={`container mx-auto px-4`}>
                <div className={`w-full pt-[48px]`}>
                    <h1 className={`font-sora text-lg leading-[20px] font-bold text-[#09080F] md:text-xl md:leading-[30px] lg:text-2xl`}>Statistics</h1>
                </div>
                <div className={`w-full h-[450px] bg-white mt-[32px] pt-[30px] pl-[0px] pr-[10px] rounded-[16px] mb-[50px] md:mb-[100px] md:pl-[20px] md:pr-[20px]`}>
                    <BarChartDesign/>
                </div>
                {/* <Rakibul></Rakibul> */}
            </div>
        </div>
    );
};

export default Statistics;