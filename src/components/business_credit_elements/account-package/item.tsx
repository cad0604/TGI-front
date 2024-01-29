import { Scale } from "@mui/icons-material"
import { AttachFileTwoTone } from "@mui/icons-material"
import { DetailsTwoTone } from "@mui/icons-material"
import { PersonRemoveOutlined } from "@mui/icons-material"
import { UnfoldLessSharp } from "@mui/icons-material"
import { Transcribe } from "@mui/icons-material"
interface AccountPersonItemProos {
    personItem: {
        icon: string,
        title: string,
        subtitle: string,
    },
}

export const AccountPersonItem: React.FC<AccountPersonItemProos> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full justify-center content-center items-center">
                <div className="flex w-28 h-28 bg-blue-700 justify-center content-center items-center rounded-full">
                    {props.personItem.icon === 'scaling' && 
                        <Scale style={{fontSize: '4rem', color: 'rgb(255, 255, 255)'}} />
                    }
                    {props.personItem.icon === 'tailored' && 
                        <DetailsTwoTone style={{fontSize: '4rem', color: 'rgb(255, 255, 255)'}} />
                    }
                    {props.personItem.icon === 'proven' && 
                        <PersonRemoveOutlined style={{fontSize: '4rem', color: 'rgb(255, 255, 255)'}} />
                    }
                    {props.personItem.icon === 'transparent' && 
                        <Transcribe style={{fontSize: '4rem', color: 'rgb(255, 255, 255)'}} />
                    }
                    {props.personItem.icon === 'unleash' && 
                        <UnfoldLessSharp style={{fontSize: '4rem', color: 'rgb(255, 255, 255)'}} />
                    }
                </div>
                <div className="flex w-full  text-2xl justify-center items-center mt-4">
                    {props.personItem.title}
                </div>
                <div className="flex w-[80%] justify-center content-center items-center">
                    {props.personItem.subtitle}
                </div>
            </div>

        </>
    );
}