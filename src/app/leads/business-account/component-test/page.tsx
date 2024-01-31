import { BuildBusinessCredit } from "@/components/form-controller/modules/business-account/build.business.credit";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { InputAdornments } from "@/components/business-account-elements/editable.content.record.invidual";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/Rectangle 115.png",
  content: "BUSINESS CREDIBILITY",
}

const information = {
  title: "INFO",
  content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
  color: "green",
}
export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center content-center items-center">
        <VideoCard videoContent={videoConten} />
        <ImportantInformation information={information} />
        <ArrowLineText type="flex flex-col w-max text-gray-700" content="DO YOU HAVE A BUSINESS NAME?" />
        <GeneralCard icon="/business-account/search.svg" content="Search secretary of state records" />
        <GotoWebsiteCard content="Variable" icon="/business-account/MyCorporation svg.svg"/>
        <InputAdornments />
        <div className="mt-10"></div>
      </div>

    </>
  )

}
