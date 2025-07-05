import { FaRegShareSquare } from "react-icons/fa";
import { CgPushUp, CgSortAz } from "react-icons/cg";
import { HiDownload, HiOutlineSwitchVertical } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import cheverondouble from "../../assets/media/ChevronDouble.png";
import shape from "../../assets/media/Shape.png";
import Main from "./Main ";

function Navbar2() {
    return (
        <>
            <nav className="bg-gray-100 overflow-x-auto whitespace-nowrap">
                <div className="flex items-center justify-between min-w-[1024px] px-4 py-2 gap-6 text-sm">

                    {/* Left Section */}
                    <div className="flex items-center gap-x-4">
                        <span className="text-black">Tool bar</span>
                        <img src={cheverondouble} alt="" className="w-4 h-4" />
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <BiHide />
                            <span className="text-black">Hide fields</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <HiOutlineSwitchVertical />
                            <span className="text-black">Sort</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <CgSortAz />
                            <span className="text-black">Filter</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <img src={shape} alt="" className="w-4 h-4" />
                            <span className="text-black">Cell view</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-1">
                            <HiDownload />
                            <span className="text-black">Import</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <CgPushUp />
                            <span className="text-black">Export</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <div className="flex items-center gap-1">
                            <FaRegShareSquare />
                            <span className="text-black">Share</span>
                        </div>
                        <RxDividerVertical className="text-gray-400" />

                        <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 whitespace-nowrap">
                            New Section
                        </button>
                    </div>
                </div>
            </nav>
            <Main />
        </>
    );
}

export default Navbar2;
