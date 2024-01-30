import React from "react"

interface AddClientInformationCardProps {
    clientInformations: {
        imgUrl: string,
        detail: string,
        name: string,
    }
}

export const AddClientInformationCard: React.FC<AddClientInformationCardProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-[30%] px-4 py-6 ">
                <div className="flex h-max w-full z-20">
                    <img className="h-16 w-18 pl-5" src="/userbig.png" alt="" />
                    {/* <img className="h-16 pl-5" src={props.clientInformations.imgUrl} alt="" /> */}
                </div>
                <div className="flex flex-col mt-[-2rem] z-10 justify-center content-center items-center px-4 border-2 border-gray-100">
                    <span className="pt-8 text-gray-300">{props.clientInformations.detail}</span>

                    <h2 className="mt-12 pb-8 text-gray-300">{props.clientInformations.name}</h2>         
                </div>
            </div>
        </>
    )
}