import { AlarmOn } from "@mui/icons-material"
import React, { Suspense } from "react"

interface accountInformationsProps {
    account: {
        name: string,
        photoUrl: string,
    }
}

export const AccountBanner = () => {
    return(
        <>
            <div className="flex w-full justify-end">
                <div className="text-xl mr-8 mt-2">...</div>
                <AlarmOn style={{height:'2rem', width:'2rem', marginTop:'0.6rem', marginRight:'1.5rem'}}/>
                <img className="h-16 w-18" src="/userbig.png" alt="" />
            </div>
        </>
    )
}