import { AiOutlinePlus } from "react-icons/ai"; 

function Footer() {
    return (
        <div className="bg-white w-full  overflow-x-hidden ">
            <div className="flex flex-wrap items-center  border border-gray-200 ml-2 w-fit gap-x-1">
                <button className=" flex bg-green-300 text-green-600 border border-green-700 px-2 py-2 rounded whitespace-nowrap">
                    All Orders
                </button>
                <button className="text-gray-500 bg-white border border-gray-200 px-2 py-2 rounded whitespace-nowrap">
                    Pending
                </button>
                <button className="text-gray-500 bg-white border border-gray-200 px-2 py-2 rounded whitespace-nowrap">
                    Reviewed
                </button>
                <button className="text-gray-500 bg-white border border-gray-200 px-2 py-2 rounded whitespace-nowrap">
                    Arrived
                </button>
                <button className="text-gray-500 bg-white border border-gray-200 px-2 py-2 rounded flex items-center justify-center">
                    <AiOutlinePlus size={20} />
                </button>
            </div>
        </div>
    );
}

export default Footer;
