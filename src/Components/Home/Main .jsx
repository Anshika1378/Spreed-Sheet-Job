import { BsGlobe } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoBagRemove } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { BsLink } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import arrow from "../../assets/media/ArrowSplit.png";
import emoji from "../../assets/media/Emoji.png";
import Footer from "./Footer";

function Main() {
    const getStatusStyles = (status) => {
        switch (status.toLowerCase()) {
            case "in-process":
                return "bg-yellow-100 text-yellow-600";
            case "need to start":
                return "bg-gray-100 text-gray-600";
            case "complete":
                return "bg-green-100 text-green-600";
            case "blocked":
                return "bg-red-100 text-red-600";
            default:
                return "bg-white-100 text-gray-600";
        }
    };

    const getPriorityStyles = (Priority) => {
        switch (Priority.toLowerCase()) {
            case "high":
                return "text-red-500";
            case "medium":
                return "text-yellow-500";
            case "low":
                return "text-blue-500";
            default:
                return "text-white-500";
        }
    };


    const jobs = [
        { id: 1, JobsRequest: "Launch social media campaign for pro...", Submitted: "15-11-2024", status: "In-Process", Submitter: "Aisha Patel ", URL: "www.aishapatel...", Assigned: "Sophie Choudhary", Priority: "Medium", Due_Date: "20-11-2024", Est_Value: "6,20,000" },
        { id: 2, JobsRequest: "Update press kit for company redsign", Submitted: "28-10-2024", status: "Need to Start", Submitter: "Irfan Khan ", URL: "www.irfankhan...", Assigned: "Tejas Pandey", Priority: "High", Due_Date: "30-10-2024", Est_Value: "3,50,000" },
        { id: 3, JobsRequest: "Finalize press testing feedback for app...", Submitted: "05-12-2024", status: "In-process", Submitter: "Mark Johnson ", URL: "www.markjohson...", Assigned: "Rachel Lee", Priority: "Medium", Due_Date: "10-12-2024", Est_Value: "4,750,000" },
        { id: 4, JobsRequest: "Design new features for the website", Submitted: "10-01-2025", status: "Complete", Submitter: "Emily Green", URL: "www.emilygreen...", Assigned: "Tom Wright", Priority: "Low", Due_Date: "15-01-2025", Est_Value: "5,900,000" },
        { id: 5, JobsRequest: "Prepare financial report for Q4", Submitted: "25-01-2025", status: "Blocked", Submitter: "Jessica Brown ", URL: "www.jessicabrown...", Assigned: "Kevin Smith", Priority: "Low", Due_Date: "30-01-2025", Est_Value: "2,800,000" },
        { id: 6, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 7, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 8, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 9, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 10, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 11, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 12, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 13, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 14, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 15, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 16, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 17, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 18, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 19, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 20, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 21, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 22, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
        { id: 23, JobsRequest: "", Submitted: "", status: "", Submitter: "", URL: "", Assigned: "", Priority: "", Due_Date: "", Est_Value: "" },
    ];

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-center text-sm">
                    <thead className="bg-gray-100">
                        {/* Top header row */}
                        <tr>
                            <th className="px-1 py-1 bg-white"></th>
                            <th className="px-2 py-1 border border-gray-300" colSpan={5}>
                                <div className="flex items-center justify-center gap-1">
                                    <BsLink className="text-blue-600" />
                                    <span>Financial Overview</span>
                                    <TfiReload className="text-orange-300" />
                                </div>
                            </th>
                            <th className="px-2 py-1 border border-gray-300 bg-white"></th>
                            <th className="px-2 py-1 border border-green-300 bg-green-200">
                                <div className="flex items-center justify-center gap-1">
                                    <img src={arrow} alt="arrowsplit" className="h-2" />
                                    ABC
                                </div>
                            </th>
                            <th className="px-2 py-1 border border-gray-300 bg-purple-200" colSpan={2}>
                                <div className="flex items-center justify-center gap-1">
                                    <img src={arrow} alt="arrow" className="h-2" />
                                    Answer a question
                                </div>
                            </th>
                            <th className="px-2 py-1 border border-gray-300 bg-orange-200">
                                <div className="flex items-center justify-center gap-1">
                                    <img src={arrow} alt="arrow" className="h-2" />
                                    Extract
                                </div>
                            </th>
                            <th className="px-6 py-1 border border-gray-300" >
                                <button className="text-blue-600 hover:text-blue-800">
                                    <AiOutlinePlus size={18} />
                                </button>
                            </th>
                        </tr>

                        {/* Column headings */}
                        <tr>
                            <th className="border border-gray-300 px-2 py-1 text-center">#</th>
                            <th className="border border-gray-300 px-2 py-1 text-left col-span-2" colSpan={2}>
                                <div className="flex items-center justify-between w-full">
                                    {/* Left side: icon + text */}
                                    <div className="flex items-center gap-1">
                                        <IoBagRemove className="text-gray-400" size={15} />
                                        <span>Job Request</span>
                                    </div>
                                    {/* Right side: dropdown arrow aligned to end */}
                                    <RiArrowDropDownLine className="text-gray-400" size={20} />
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center">
                                <div className="flex items-center justify-between">
                                    <SlCalender className="text-gray-400" />
                                    <span>Submitted</span>
                                    <RiArrowDropDownLine className="text-gray-400" size={20} />
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center">
                                <div className="flex items-center justify-between">
                                    <IoIosArrowDropdownCircle className="text-gray-400" />
                                    <span>Status</span>
                                    <RiArrowDropDownLine className="text-gray-400" size={20} />
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center">
                                <div className="flex items-center justify-between">
                                    <FaUserAlt className="text-gray-400" />
                                    <span>Submitter</span>
                                    <RiArrowDropDownLine className="text-gray-400" size={20} />
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center">
                                <div className="flex items-center justify-between">
                                    <BsGlobe className="text-gray-400" />
                                    <span>URL</span>
                                    <RiArrowDropDownLine className="text-gray-400" size={20} />
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center bg-green-100">
                                <div className="flex items-center justify-center">
                                    <img src={emoji} className="text-gray-400" />
                                    <span>Assigned</span>
                                </div>
                            </th>
                            <th className="border border-gray-300 px-2 py-1 text-center bg-purple-100">Priority</th>
                            <th className="border border-gray-300 px-2 py-1 text-center bg-purple-100">Due Date</th>
                            <th className="border border-gray-300 px-2 py-1 text-center bg-orange-100">Est, Value</th>

                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id} className="bg-white">
                                <td className="border border-gray-300 px-2 py-1">{job.id}</td>
                                <td className="border border-gray-300 px-2 py-1 p-0.5" colSpan={2}>{job.JobsRequest}</td>
                                <td className="border border-gray-300 px-2 py-1">{job.Submitted}</td>
                                <td className="border border-gray-300 px-2 py-1">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(job.status)}`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{job.Submitter}</td>
                                <td className="border border-gray-300 px-2 py-1">{job.URL}</td>
                                <td className="border border-gray-300 px-2 py-1">{job.Assigned}</td>
                                <td className="border border-gray-300 px-2 py-1">
                                    <span className={`px-2 py-1 text-xs font-medium ${getPriorityStyles(job.Priority)} `}>
                                        {job.Priority}
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{job.Due_Date}</td>
                                <td className="border border-gray-300 px-2 py-1">{job.Est_Value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default Main;
