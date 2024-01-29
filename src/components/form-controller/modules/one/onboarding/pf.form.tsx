"use client";
import React, {
  FormEventHandler,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import toast from "react-hot-toast";

interface TableRow {
  name: string;
  slogan: string;
  url?: string;
}
interface PFProps {
  onChange: (selected: string[] | []) => void;
  accountName?: string;
  data?: TableRow[];
}
const tableData: TableRow[] = [
  { name: "Boom (boompay.app)", slogan: "Build credit with rent" },
  {
    name: "Kikoff Credit Builder",
    slogan: "Build Credit Safely & Responsibly",
  },
  {
    name: "Self Credit Builder",
    slogan: "Build Credit. Build Savings. Build Dreams",
  },
  // Add more rows as needed
];
export const TableComponent: React.FC<PFProps> = (props) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  console.log(selectedRows);
  // Sample data for the table

  const toggleRowSelection = (rowName: string) => {
    const updatedRows = selectedRows.includes(rowName)
      ? selectedRows.filter((name) => name !== rowName)
      : [...selectedRows, rowName];

    props.onChange(updatedRows);
    setSelectedRows(updatedRows);
  };

  const handleSelectAll = () => {
    const allNames = props?.data?.map((row) => row.name);
    const isAllSelected = selectedRows.length === allNames?.length;

    const updatedRows = isAllSelected ? [] : allNames;

    props.onChange(updatedRows as string[]);
    setSelectedRows(updatedRows as string[]);
  };

  const handleDeselectAll = () => {
    props.onChange([]);
    setSelectedRows([]);
  };

  useEffect(() => {}, [selectedRows]);

  return (
    <div className=" select-none flex flex-col items-center justify-center md:px-[60] px-[16px]  w-full h-full">
      <div className="w-full h-fit flex flex-col">
        <div className="shadow-tremor-card rounded-md w-full h-fit bg-white flex flex-row items-center">
          <div
            style={{
              background: "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
            }}
            className="pl-4 rounded-l-md text-[18px] text-white font-medium w-[60%] p-3 "
          >
            {props.accountName}
          </div>
          <div className="bg-white rounded-r-md text-gray-700 pl-4 text-[18px] font-medium w-[40%] p-3">
            Mark when done!
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 w-full h-fit">
        {props?.data?.map((row, index) => (
          <label
            htmlFor={row.name}
            className="w-full h-full flex flex-row justify-between items-center"
            key={index}
          >
            <div>
              <div className="text-[13px] text-gray-500">{row.slogan}</div>
              <div className="text-gray-700 font-medium">{row.name}</div>
            </div>
            <input
              id={row.name}
              className="w-[16px] h-[16px]"
              type="checkbox"
              checked={selectedRows.includes(row.name)}
              onChange={() => toggleRowSelection(row.name)}
            />
          </label>
        ))}
      </div>
      <div className="w-full flex flex-row gap-4 items-center justify-end mt-4">
        <div
          className="cursor-pointer text-red-700"
          onClick={selectedRows.length === 0 ? () => {} : handleDeselectAll}
        >
          Clear all
        </div>
        <div
          className="cursor-pointer  mr-2 bg-green-500 p-2 h-auto px-3 w-fit text-white rounded-full"
          onClick={handleSelectAll}
        >
          {selectedRows.length !== 0 ? " Selected" : " Select All"}
        </div>
      </div>
    </div>
  );
};

export const PFForm = () => {
  const router = useRouter();
  const {
    SetActiveTab,
    SetFormID,
    SetButtonText,
    SetIsPending,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = usePCR();
  const form = useForm({
    primaryAccounts: null,
    freezeAccount: null,
  });

  useLayoutEffect(() => {
    SetActiveTab(5);
    SetFormID("pf");
    SetButtonText("Final Submit");
    SetMobileH4("Positive account & Freeze account");
    SetMobileText("6/6");
    SetMobileValue(100);
  }, []);

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.PFAccount,
    Error,
    Calls.IRequest.PFAccount
  >({
    mutationFn: (variables) => ApiCalls.Module.one.PFAccount(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      router.replace(r?.urlPath as string);
    },
    onError: (e) => {},
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(form.data());
    console.log(form.data());
  };
  useEffect(() => {
    if (isPending) {
      SetIsPending(true);
    } else {
      SetIsPending(false);
    }
  }, [isPending]);
  return (
    <form
      id={"pf"}
      onSubmit={onSubmit}
      className={
        "mt-36 mb-36   flex flex-col justify-center items-center w-full h-screen "
      }
    >
      <div
        className={
          "rounded-b-[30px] flex flex-col justify-between items-center bg-gray-50 md:w-[70%] w-full h-fit pb-8"
        }
      >
        <div className={"p-4 rounded-b-[30px] bg-red-600/60 w-[80%] h-auto"}>
          <div className={" space-y-2 w-full h-full text-center align-middle"}>
            <h3 className={" text-white text-[22px] font-semibold "}>Set up</h3>
            <p className={" text-white text-[13px] "}>
              Primary accounts and be sure to pay them all on time. After
              setting up the primary accounts then place a freeze on all your
              secondary bureaus.
            </p>
          </div>
        </div>
        <div
          className={
            "flex flex-col justify-between items-center w-full space-y-3"
          }
        >
          <div className={"mt-8 w-full h-fit text-center align-middle"}>
            <p>Choose from the following websites</p>
            <h3
              className={"uppercase text-blue-900 text-[24px] font-semibold "}
            >
              Create your Primary accounts :
            </h3>
          </div>
          <div className={"md:w-[80%] w-full"}>
            <TableComponent
              data={tableData}
              accountName={"Primary accounts"}
              onChange={(selected) => {
                form.set("primaryAccounts", selected);
              }}
            />
          </div>
        </div>
        <div
          className={
            "flex flex-col justify-between items-center w-full space-y-3"
          }
        >
          <div className={"mt-8 mb-2 w-full h-fit text-center align-middle"}>
            <h3
              className={"uppercase text-blue-900 text-[24px] font-semibold "}
            >
              Freeze the Secondary Bureaus :
            </h3>
          </div>
          <div className={"md:w-[80%] w-full"}>
            <TableComponent
              data={tableData}
              accountName={"Freeze Account"}
              onChange={(selected) => {
                form.set("freezeAccount", selected);
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
