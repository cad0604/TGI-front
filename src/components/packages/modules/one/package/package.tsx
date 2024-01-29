"use client";
import { Normal } from "@/components/packages/modules/one/package/childs/normal";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useLayoutEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { Featured } from "@/components/packages/modules/one/package/childs/featured";
import { useRouter } from "next/navigation";
export const Package = () => {
  const router = useRouter();
  const { SetActiveTab, SetMobileH4, SetMobileText, SetMobileValue } = usePCR();

  const { data, isLoading } =
    useQuery<Calls.IResponse.ModuleOnePackageResponse>({
      queryKey: ["get_module_ome_plans"],
      queryFn: () => ApiCalls.Module.one.plans(),
    });

  useLayoutEffect(() => {
    SetActiveTab(3);
    SetMobileH4(" Select Packages");
    SetMobileText("4/6");
    SetMobileValue(80);
  }, []);
  return (
    <div
      className={
        " flex  flex-col gap-6 items-center   justify-start w-full h-fit"
      }
    >
      <div
        className={
          "p-[16px] flex  flex-col gap-6 items-center   justify-center w-full h-fit mt-4"
        }
      >
        <div className={"md:w-[40%]  text-center "}>
          <h3 className={"text-[22px] font-semibold"}>
            Your journey begins here with TGI Scale Me, the key to scaling up
            your financial future!
          </h3>
          <p className={"mt-1 text-[14px] font-normal"}>
            {" "}
            let's start scaling up your credit together.{" "}
          </p>
        </div>

        <div
          className={
            " mt-8 flex flex-row items-center gap-2 justify-center bg-blue-50 rounded-md h-[36px] w-fit p-2"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="23"
            fill="none"
          >
            <path
              stroke="#1380FF"
              stroke-width="2"
              d="m18.6406 3.1377 1.7249 4.66167 4.6617 1.72497-4.6617 1.72496-1.7249 4.6617-1.725-4.6617-4.6617-1.72496 4.6617-1.72497 1.725-4.66167Zm-8.543 9.271 1.035 2.797 2.797 1.035-2.797 1.035-1.035 2.797-1.03497-2.797-2.79701-1.035 2.79701-1.035 1.03497-2.797Zm.9588-9.271-.3234.87406-.87409.32343.87409.32343.3234.87407.3234-.87407.8741-.32343-.8741-.32343-.3234-.87406ZM5.27352 7.49902l.39751 1.07426 1.07426.39751-1.07426.39751-.39751 1.0743-.39751-1.0743-1.07425-.39751 1.07425-.39751.39751-1.07426Z"
            />
          </svg>
          <p className={"md:text-sm text-[13px]"}>
            Choose a package that aligns with your goals
          </p>
        </div>
      </div>
      <>
        {isLoading ? (
          <div
            className={"bg-white flex h-screen justify-center items-center "}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          <div
            className={
              "flex md:flex-row flex-col gap-6 md:items-start items-center md:justify-center justify-start w-full"
            }
          >
            <Normal
              imgUrl={"/module/one/red.png"}
              name={data?.data[0].name}
              fullPrice={data?.data[0].pricing.fullPrice}
              emiPrice={data?.data[0].pricing.emiPrice}
              validity={data?.data[0].pricing.intervalCount}
              bulletPoints={data?.data[0].bulletPoints}
              onClick={() => router.push(`/checkout/one/${data?.data[0]._id}`)}
            />
            <Featured
              imgUrl={"/module/one/blue.png"}
              name={data?.data[1].name}
              fullPrice={data?.data[1].pricing.fullPrice}
              emiPrice={data?.data[1].pricing.emiPrice}
              validity={data?.data[1].pricing.intervalCount}
              bulletPoints={data?.data[1].bulletPoints}
              onClick={() => router.push(`/checkout/one/${data?.data[1]._id}`)}
            />
            <Normal
              imgUrl={"/module/one/green.png"}
              name={data?.data[2].name}
              fullPrice={data?.data[2].pricing.fullPrice}
              emiPrice={data?.data[2].pricing.emiPrice}
              validity={data?.data[2].pricing.intervalCount}
              bulletPoints={data?.data[2].bulletPoints}
              onClick={() => router.push(`/checkout/one/${data?.data[2]._id}`)}
            />
          </div>
        )}
      </>
    </div>
  );
};
