import { LeadForm } from "@/components/form-controller/modules/four/lead/lead.form";

export const DigitalMarketingScreen = () => {
  return (
    <div
      className={
        "w-full flex flex-col-reverse md:flex-row  md:items-center md:justify-center"
      }
    >
      <div className={"w-full md:w-[35%]"}>
        <LeadForm />
      </div>
      <div className={" px-16 py-4 w-full md:w-[65%]"}>
        <div>
          <img src={"/module/dg.png"} alt={"dg"} />
        </div>
      </div>
    </div>
  );
};
