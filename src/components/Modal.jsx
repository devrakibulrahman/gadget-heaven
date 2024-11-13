import { deleteTotalPriceToLocalStore } from "@/utilities/LocalStore";
import { PriceContext } from "../../constants/PriceContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
    const backToHome = useNavigate();
    const {item} = useContext(PriceContext);
    const totalPrice = item.reduce((total, curr) => total + curr, 0);

    const handleBackToHome = () => {
        backToHome('/');
        deleteTotalPriceToLocalStore();
    };

    return (
        <>
            <dialog id="my_modal_4" className="modal">
            <div className={`w-[350px] min-h-[330px] bg-white rounded-2xl p-[25px] md:p-[30px] text-center sm:w-[450px]`}>
                <div className={`w-full flex items-center justify-center`}>
                    <img src='../src/assets/congrates.png' alt="congrates image" />
                </div>
                <div className={`w-full mt-[26px]`}>
                    <h1 className={`font-sora text-xl leading-[30px] font-bold text-[#09080F]`}>Payment Successfully</h1>
                </div>
                <div className={`w-full border-t border-[#09080F1A] my-3`}></div>
                <div className={`w-full`}>
                    <p className={`font-sora text-base leading-8 font-medium text-[#09080F99]`}>Thanks for purchasing.</p>
                    <p className={`font-sora text-base leading-8 font-medium text-[#09080F99]`}>Total: ${totalPrice}</p>
                </div>
                <div className="modal-action">
                <form method="dialog" className={`w-full flex items-center justify-center`}>
                    <button onClick={handleBackToHome} className={` w-full h-[50px] bg-[#11000008] rounded-full font-sora text-base leading-5 font-semibold text-[#09080F]`}>Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </>
    );
};

export default Modal;