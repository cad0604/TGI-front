import { UsersIcon } from "@heroicons/react/24/outline"
import { UserPlusIcon } from "@heroicons/react/24/outline"
import { FaceSmileIcon } from "@heroicons/react/24/outline"

interface AddClientPanelProps {
    activeState: string,
}

export const AddClientPanel: React.FC<AddClientPanelProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full mt-36">


                <div className={props.activeState === "dashboard" ? "flex flex-col w-full bg-blue-500 justify-center mt-20 content-center items-center rounded-r-full" : "flex flex-col w-full justify-center content-center items-center rounded-r-full bg-gray-100"} >
                    <UsersIcon className="flex w-24 h-20 text-white pt-5"/>
                    <div className="flex text-lg text-gray-300 pb-5">Client Dashboard</div>
                </div>
                <div className="h-12"></div>
                <div className={props.activeState === "add" ? "flex flex-col w-full bg-blue-500 justify-center mt-20 content-center items-center rounded-r-full" : "flex flex-col w-full justify-center content-center items-center rounded-r-full  bg-gray-100"} >
                    <UserPlusIcon className="flex w-24 h-20 text-white pt-5"/>
                    <div className="flex text-lg text-gray-300 pb-5">Add Client</div>
                </div>
                <div className="h-12"></div>
                <div className={props.activeState === "improve" ? "flex flex-col w-full bg-blue-500 justify-center mt-20 content-center items-center rounded-r-full" : "flex flex-col w-full justify-center content-center items-center rounded-r-full bg-gray-100"} >
                    <FaceSmileIcon className="flex w-24 h-20 text-white pt-5"/>
                    <div className="flex text-lg text-gray-300 pb-5">Improve Standing</div>
                </div>

            </div>
        </>
    )
}