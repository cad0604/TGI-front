import { SquaresPlusIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import React from "react"

interface AddClientInformationProps {
    clientInformations: {
        firstName: string,
        lastName: string,
        email: string,
        date: string,
        funding: string
    }
}

export const AddClientInformation: React.FC<AddClientInformationProps> = (props) => {
    return (
        <>
            <div className="grid grid-col-12 gap-[4.5rem] justify-center mt-4 border-2 border-gray-100 py-4 rounded-2xl w-full">
                <div className="flex col-start-1 col-span-2 justify-center content-center items-center text-xs">
                    {props.clientInformations.firstName}
                </div>
                <div className="flex col-start-3 col-span-2 justify-center content-center items-center text-xs">
                    {props.clientInformations.lastName}
                </div>
                <div className="flex col-start-5 col-span-2 justify-center content-center items-center text-xs">
                    {props.clientInformations.email}
                </div>
                <div className="flex col-start-7 col-span-2 justify-center content-center items-center text-xs">
                    {props.clientInformations.date}
                </div>
                <div className="flex col-start-9 col-span-2 justify-center content-center items-center text-xs">
                    {props.clientInformations.funding}
                </div>
                <div className="flex col-start-11 col-span-2 justify-center content-center items-center text-xs">
                    <UserCircleIcon className=" text-blue-600 pr-3"/>
                    <SquaresPlusIcon  className=" text-blue-600 mr-3"/>
                </div>
            </div>
        </>
    )
}