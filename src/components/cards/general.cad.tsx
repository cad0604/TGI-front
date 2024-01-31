import Image from "next/image";

interface GeneralCardProps {
    icon: string,
    content: string,
}

export const GeneralCard: React.FC<GeneralCardProps> = (props) => {
    return(
        <>
            <div className="flex flex-col w-72 h-52 border-2 border-blue-400 rounded-2xl justify-center content-center items-center">
                <Image src={props.icon} objectFit="contain" alt="ssa" width={40} height={40} />
                <div className="flex w-full pt-6 justify-center content-center items-center">{props.content}</div>
            </div>
        </>
    );
}