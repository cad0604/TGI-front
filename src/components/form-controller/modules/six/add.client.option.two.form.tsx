"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangeIcon, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Settings, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SortByAlpha } from "@mui/icons-material";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AddClientInformation } from "@/components/business_credit_elements/add-client/client.information";
import { AddClientInformationCard } from "@/components/business_credit_elements/add-client/client.information.card";
interface Option {
  label: string;
}
export const AddClientOptionTwoForm = () => {
  // Client's informations
  let clientInformations = [
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
  ];
  let clientDetailInformations = [
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
  ];
  return (
    <>

      <form
        id={"option2"}
        className={
          " md:mt-10 mb-1 flex flex-col h-fit justify-start items-start  md:px-2 px-[16px] w-full border-2 border-blue-600 rounded-3xl mx-12"
        }
      >
        {/* Sort and Search Bar */}
        <div className="grid grid-col-12 gap-10 justify-start">
          <div className="flex col-start-1 col-span-2">
            <div className="flex flex-row my-2 mt-10 justify-start">
              <div className="flex w-max"><Settings /></div>
              <div className="flex w-max px-3">Sort By A to Z</div>
              <div className="flex w-max"><ChevronDownIcon className="h-6" /></div>
            </div>
          </div>
          <div className="flex col-start-3 col-span-2">
            <div className="flex flex-row my-2 mt-10 justify-start">
              <div className="flex w-max ml-8"><DateRangeIcon /></div>
              <div className="flex w-max px-3">Sort By A to Z</div>
              <div className="flex w-max"><ChevronDownIcon className="h-6" /></div>
            </div>
          </div>

          <div className="flex col-start-8 col-span-3">
            <div className="flex w-max">
              <TextField label="Search by name" style={{ marginTop: '1rem' }} />
            </div>
          </div>
          <div className="flex col-start-11 col-span-2">
            <Button className="h-6 mt-8 pb-6 bg-blue-600">ADD CLIENTS</Button>
          </div>
        </div>

        {/* Title bar of Client's informations */}
        <div className="grid grid-col-12 gap-[4.5rem] justify-center mt-8 ml-4 w-full">
          <div className="flex col-start-1 col-span-2 justify-center content-center items-center text-md">
            FIRST NAME
          </div>
          <div className="flex col-start-3 col-span-2 justify-center content-center items-center text-md">
            LAST NAME
          </div>
          <div className="flex col-start-5 col-span-2 justify-center content-center items-center text-md">
            EMAIL
          </div>
          <div className="flex col-start-7 col-span-2 justify-center content-center items-center text-md">
            DATE
          </div>
          <div className="flex col-start-9 col-span-2 justify-center content-center items-center text-md">
            FUNDING STATUS
          </div>
          <div className="flex col-start-11 col-span-2 justify-center content-center items-center text-md">
            VIEW PROFILE
          </div>
        </div>

        <AddClientInformation clientInformations={clientInformations[0]} />
        {/* detail fields */}
        <div className="flex flex-col mt-8 justify-center content-center items-center w-full">
          <h1 className=" text-2xl text-gray-700">RECENT NOTE</h1>
          <div className="flex flex-row w-full justify-center content-center items-center">

            {clientDetailInformations.map((clientInfors) => (
              <AddClientInformationCard clientInformations={clientInfors} />
            ))}
          </div>
          <p className=" text-blue-700">Close</p>
        </div>


        {clientInformations.map((clientInformation) => (
          <AddClientInformation clientInformations={clientInformation} />
        ))}
        <div className=" h-52"></div>

      </form>
  
    </>
  );
};
