import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { Setting } from "iconsax-react";
import Link from "next/link";

interface DataInterface {
    name: string,
    url: string,
}
const fundability: DataInterface[] = [
    { name: "Business name", url: "#" },
    { name: "Business Address", url: "#" },
    { name: "Business Entity", url: "#" },
    { name: "EIN#", url: "#" },
    { name: "Business Phone # & 411 Listing", url: "#" },
    { name: "Website & Email", url: "#" },
    { name: "Business License", url: "#" },
    { name: "Business Bank Account", url: "#" },
    { name: "Bussiness Merchant Account", url: "#" },
    { name: "Wrap", url: "#" },
];

const establish: DataInterface[] = [
    { name: "Dun & Bradstreet", url: "#" },
    { name: "Business Experian", url: "#" },
    { name: "Business Equifax", url: "#" },
    { name: "Reporting - How to fix businesss credit", url: "#" },
];

const start = [];

const monitor: DataInterface[] = [
    { name: "Credit Monitoring", url: "#" },
    { name: "Monitor Dun & Bradstreet", url: "#" },
    { name: "Monitor Business Experian", url: "#" },
    { name: "Monitor Business Equifax", url: "#" },
    { name: "Request Lexis Nexis report", url: "#" },
    { name: "Request Chex Systems Report", url: "#" },
];

const bulding = [];

const advance = [];

const revolving = [];


export const MonitorReportForm = () => (
    <>
        <div className="flex flex-col w-full px-6 justify-start border-2 border-blue-600 rounded-2xl pt-8">
            {/* step 1 */}
            <p className="text-blue-500">Step1</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Fundability Foundation</h2></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {fundability.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-[30rem]">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 2 */}
            <p className="text-blue-500">Step2</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Establish Business Reports</h2></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {establish.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-[30rem]">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 3 */}
            <p className="text-blue-500">Step3</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Start Building: </h2></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600">Tier1 </div></div>
            </div>
            {/* step 4 */}
            <p className="text-blue-500">Step4</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Monitor Business Reports</h2></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {monitor.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-[30rem]">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 5 */}
            <p className="text-blue-500">Step5</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Building Credit: </h2></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600">Tier1 </div></div>
            </div>
            {/* step 6 */}
            <p className="text-blue-500">Step4</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Advance Building: </h2></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600">Tier1 </div></div>
            </div>
            {/* step 7 */}
            <p className="text-blue-500">Step7</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-2xl my-2"><h2>Revolving Account: </h2></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600">Tier1 </div></div>
            </div>
        </div>
    </>
)

