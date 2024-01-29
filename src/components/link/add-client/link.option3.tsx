interface LinkOptionProps {
    linkData: {
        title: string,
        linkAddress: string,
        linkColor: string,
    }
}
export const LinkOption: React.FC<LinkOptionProps> = (props) => {
    return (
        <>
            <div className={"flex w-full"}>
                <div className="flex flex-row w-full contet-center items-center ">
                    <div className="w-[1.2rem] h-[15rem] bg-blue-700 rounded-l-full ml-12" color={props.linkData.linkColor} style={{ backgroundColor: props.linkData.linkColor }}></div>
                    <div className="flex flex-col w-full justify-center content-center items-center">
                        <div className="text-gray-800 text-lg">
                            {props.linkData.title}
                        </div>
                        <div className="w-[40px] h-[40px] m-6">
                            <img className="w-[40px] h-[40px]" src="/done.png" alt="" />
                        </div>
                        <div className="text-gray-600">
                            {props.linkData.linkAddress}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
