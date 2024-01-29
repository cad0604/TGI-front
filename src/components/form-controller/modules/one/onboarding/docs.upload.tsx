"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import FileInput from "@uiw/react-file-input";
import { FileInputValue } from "@uiw/react-file-input/src";
// @ts-ignore
import useForm from "new-react-use-form";
import { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { FileUploadWithOutCropWithOutMultiple } from "@/components/fileupload/fileupload";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const DocsUpload = () => {
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
    identityCard1: null,
    proofOfAddress1: null,
    socialSecurityCard1: null,
    identityCard2: null,
    proofOfAddress2: null,
    socialSecurityCard2: null,
  });

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.DocsUploads,
    Error,
    Calls.IRequest.Docs
  >({
    mutationFn: (variables) => ApiCalls.Module.one.docs(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => {
      toast.error(e?.message);
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(form.data());
  };

  useLayoutEffect(() => {
    SetActiveTab(4);
    SetFormID("docs-upload");
    SetButtonText("Upload & Next");
    SetMobileH4("Upload verification IDs");
    SetMobileText("5/6");
    SetMobileValue(90);
  }, []);
  useEffect(() => {
    if (isPending) {
      SetIsPending(true);
    } else {
      SetIsPending(false);
    }
  }, [isPending]);
  return (
    <form
      onSubmit={onSubmit}
      id={"docs-upload"}
      className={
        "my-10 flex flex-col h-fit justify-center items-center  md:px-8 px-[16px] w-full"
      }
    >
      <h3>
        We need Proof of Address It should be consistent with the address on
        your ID.
      </h3>
      <div
        className={
          "mt-6 h-fit flex md:flex-row flex-col justify-center items-start gap-8 md:w-[60%] w-full"
        }
      >
        <img src={"/module/file.png"} />
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <Popover placement="bottom-start">
              <PopoverHandler>
                <TimelineHeader className="cursor-pointer h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Upload your identity proof
                  </Typography>
                </TimelineHeader>
              </PopoverHandler>
              <PopoverContent>
                <p>This could be :</p>
                <p>Driving license</p>
                <p>State ID card</p>
                <p>Other government issued photo ID card</p>
              </PopoverContent>
            </Popover>
            <TimelineBody className="mt-2 pb-8">
              <FileUploadWithOutCropWithOutMultiple
                key={"01"}
                fileId={"0"}
                onChange={(file) => form.set("identityCard1", file)}
                nameofFile={"Front Side"}
              />
              <FileUploadWithOutCropWithOutMultiple
                key={"02"}
                fileId={"1"}
                onChange={(file) => form.set("identityCard2", file)}
                nameofFile={"Back Side"}
              />
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <Popover placement="bottom-start">
              <PopoverHandler>
                <TimelineHeader className="cursor-pointer h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Upload your address proof
                  </Typography>
                </TimelineHeader>
              </PopoverHandler>
              <PopoverContent>
                <p>This could be :</p>
                <p>Bank statement</p>
              </PopoverContent>
            </Popover>
            <TimelineBody className="mt-2 pb-8">
              <FileUploadWithOutCropWithOutMultiple
                fileId={"2"}
                onChange={(file) => form.set("proofOfAddress1", file)}
                nameofFile={"Front Side"}
              />
              <FileUploadWithOutCropWithOutMultiple
                fileId={"3"}
                onChange={(file) => form.set("proofOfAddress2", file)}
                nameofFile={"Back Side"}
              />
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <Popover placement="bottom-start">
              <PopoverHandler>
                <TimelineHeader className="cursor-pointer h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Upload your social security card proof
                  </Typography>
                </TimelineHeader>
              </PopoverHandler>
              <PopoverContent>
                <p>This could be :</p>
                <p>Bank statement</p>
              </PopoverContent>
            </Popover>
            <TimelineBody className="mt-2 pb-8">
              <FileUploadWithOutCropWithOutMultiple
                fileId={"4"}
                onChange={(file) => form.set("socialSecurityCard1", file)}
                nameofFile={"Front Side"}
              />
              <FileUploadWithOutCropWithOutMultiple
                fileId={"5"}
                onChange={(file) => form.set("socialSecurityCard2", file)}
                nameofFile={"Back Side"}
              />
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </form>
  );
};
