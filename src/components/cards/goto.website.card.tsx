import { Outbox } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import Image from "next/image";

interface GotoWebsiteCardProps {
    icon: string,
    content: string,
}

export const GotoWebsiteCard: React.FC<GotoWebsiteCardProps> = (props) => {
    return(
        <>
            <div className="flex flex-col w-80 h-52 border-2 border-blue-400 rounded-2xl ">
                <div className="flex w-full justify-self-start justify-start pl-6 text-blue-600 text-md mt-3"><b>Cost:</b>{props.content}</div>
                <div className="flex justify-center content-center items-center w-full h-24"><Image src={props.icon} objectFit="contain" alt="ssa" width={200} height={50} /></div>
                <div className="flex justify-center content-center items-center w-full"><Button href="#" endIcon={<Outbox />} size="large" style={{width:'14rem'}}> Go to Website </Button></div>
            </div>
        </>
    );
}