import { PlayCircleFilledOutlined, PlayCircleOutline } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Image from "next/image"


interface VideoCardProps {
    videoContent: {
        title: string,
        videoUrl: string,
        content: string,
    }
}

export const VideoCard: React.FC<VideoCardProps> = (props) => {
    return (
        <>
            <div className="flex w-full justify-center m-4">
                <div className="flex flex-col w-96 h-72 justify-center">
                    <h2 className="flex text-green-600">{props.videoContent.title}</h2>
                    <div className=" relative w-full h-56 rounded-2xl ">
                        <Image src={props.videoContent.videoUrl} layout="fill" objectFit="cover" alt="" className=" rounded-xl" />
                        <div className="flex flex-col h-full justify-center  content-center items-center w-full relative">
                            <div className="flex w-max bg-blue-500 p-3 rounded-lg text-white mb-4">{props.videoContent.content}</div>
                            {/* <Image src="/business-account/bank.svg" objectFit="contain" alt="" width={40} height={40} /> */}
                            <IconButton aria-label="play video" color="primary" style={{fontSize:'4rem'}}>
                                <PlayCircleOutline fontSize="inherit"/>
                            </IconButton>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}