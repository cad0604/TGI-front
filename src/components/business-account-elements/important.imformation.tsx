interface IImportantInformationProps {
    information: {
        title: string,
        content: string,
        color: string,
    },
}

export const ImportantInformation: React.FC<IImportantInformationProps> = (props) => {
    return (
        <>
            <div className={"w-full"}>
                <div className="flex flex-row w-full contet-center items-center">
                    <div className={`w-[3rem] h-[8rem] bg-gradient-to-r from-white bg-${props.information.color}-500 rounded-r-[10rem] mr-4`}></div>
                    <div className={`w-[1.5rem] h-[1.5rem] bg-${props.information.color}-500 rounded-full text-center ml-2 mr-4`}><span className="text-white">i</span></div>
                    <div className="w-full ml-1">
                        <p>{props.information.title}</p>
                        <span className="text-sm text-gray-700">
                            {props.information.content}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}