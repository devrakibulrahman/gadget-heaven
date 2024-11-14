
const TeamMember = ({teamData}) => {
    return (
        <div className={`w-[350px] min-h-[400px]`}>
            <div className={`w-full h-[300px] flex items-center justify-center`}>
                <img src={teamData.image} alt="team image" className={`w-[300px] h-[300px] object-cover`}/>
            </div>
            <div className={`w-full mt-[18px] text-center`}>
                <h1 className={`font-sora text-xl leading-[25px] font-bold text-[#09080F]`}>{teamData.name}</h1>
            </div>
            <div className={`w-full mt-2 text-center`}>
                <p className={`font-sora text-lg leading-[25px] font-light text-[#09080F]`}>{teamData.companyRole}</p>
            </div>
        </div>
    );
};

export default TeamMember;