"use client";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React, { FormEventHandler, useState } from "react";

export const OneCheckout = () => {
  const [open, setOpen] = React.useState(false);
  const [paymentType, setPaymentType] = useState<string>("");
  const handleOpen = () => setOpen(!open);
  const onClickPayment = () => {
    console.log(paymentType);
  };
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>

      <Dialog size={"lg"} open={open} handler={handleOpen}>
        <DialogHeader>Express Checkout</DialogHeader>
        <DialogBody>
          <div className={"w-full flex flex-col gap-8"}>
            <Radio
              onChange={(e) => {
                setPaymentType("full");
              }}
              color={"blue"}
              name="description"
              label={
                <div>
                  <Typography
                    color="blue-gray"
                    className="w-fit flex flex-row gap-2 font-semibold"
                  >
                    Full Payment
                    <Chip
                      variant={"gradient"}
                      size={"sm"}
                      color="red"
                      value="20% Discount"
                    />
                  </Typography>
                  <Typography color="gray" className="text-[12px] font-normal">
                    Take advantage of our exclusive discount by making the full
                    payment today! Enjoy savings and hassle-free transactions.
                  </Typography>
                </div>
              }
              containerProps={{
                className: "-mt-5",
              }}
              crossOrigin={undefined}
            />
            <Radio
              onChange={(e) => {
                setPaymentType("emi");
              }}
              color={"blue"}
              name="description"
              label={
                <div>
                  <Typography
                    color="blue-gray"
                    className="flex flex-row gap-2 font-semibold"
                  >
                    Emi Payment
                    <Chip
                      variant={"gradient"}
                      size={"sm"}
                      color="green"
                      value="3 Easy Emi"
                    />
                  </Typography>
                  <Typography color="gray" className="text-[12px] font-normal">
                    Enjoy flexibility with EMI payments. Split your purchase
                    into easy monthly installments for added convenience.
                  </Typography>
                </div>
              }
              containerProps={{
                className: "-mt-5",
              }}
              crossOrigin={undefined}
            />

            <div
              className={
                "p-4 rounded-md border-2 border-gray-100  w-full h-auto"
              }
            >
              <Typography
                variant={"paragraph"}
                color="blue-gray"
                className="font-semibold"
              >
                Billing Details
              </Typography>
              <div className={"mt-2"}>
                <div className={"w-full flex flex-col gap-2  "}>
                  <div className={"w-full flex flex-row justify-between  "}>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      Plan 1
                    </Typography>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      $200.99
                    </Typography>
                  </div>
                  <div className={"w-full flex flex-row justify-between  "}>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      Tax
                    </Typography>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      12%
                    </Typography>
                  </div>
                  <div className={"w-full flex flex-row justify-between  "}>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      variant={"small"}
                      color="blue-gray"
                      className="font-medium"
                    >
                      $200.99
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          billing@tg.com
          <Button
            variant="text"
            color="red"
            type={"reset"}
            onClick={handleOpen}
            className="rounded-full mr-2"
          >
            <span>Cancel</span>
          </Button>
          <Button
            disabled={!paymentType}
            className={"rounded-full"}
            variant="filled"
            color="blue"
            type={"submit"}
            onClick={onClickPayment}
          >
            Make Payment
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
// <div className={"w-full flex flex-col gap-8"}>
//   <Radio
//       checked={form.paymentType}
//       onChange={(e) => {
//         form.set("paymentType", e.target.checked);
//       }}
//       color={"blue"}
//       name="description"
//       label={
//         <div>
//           <Typography
//               color="blue-gray"
//               className="w-fit flex flex-row gap-2 font-semibold"
//           >
//             Full Payment
//             <Chip
//                 variant={"gradient"}
//                 size={"sm"}
//                 color="red"
//                 value="20% Discount"
//             />
//           </Typography>
//           <Typography color="gray" className="text-[12px] font-normal">
//             Take advantage of our exclusive discount by making the full
//             payment today! Enjoy savings and hassle-free transactions.
//           </Typography>
//         </div>
//       }
//       containerProps={{
//         className: "-mt-5",
//       }}
//       crossOrigin={undefined}
//   />
//   <Radio
//       checked={form.paymentType}
//       onChange={(e) => {
//         form.set("paymentType", e.target.checked);
//       }}
//       color={"blue"}
//       name="description"
//       label={
//         <div>
//           <Typography
//               color="blue-gray"
//               className="flex flex-row gap-2 font-semibold"
//           >
//             Emi Payment
//             <Chip
//                 variant={"gradient"}
//                 size={"sm"}
//                 color="green"
//                 value="3 Easy Emi"
//             />
//           </Typography>
//           <Typography color="gray" className="text-[12px] font-normal">
//             Enjoy flexibility with EMI payments. Split your purchase
//             into easy monthly installments for added convenience.
//           </Typography>
//         </div>
//       }
//       containerProps={{
//         className: "-mt-5",
//       }}
//       crossOrigin={undefined}
//   />
//
//   <div
//       className={
//         "p-4 rounded-md border-2 border-gray-100  w-full h-auto"
//       }
//   >
//     <Typography
//         variant={"paragraph"}
//         color="blue-gray"
//         className="font-semibold"
//     >
//       Billing
//     </Typography>
//     <div className={"mt-2"}>
//       <div className={"w-full flex flex-col gap-2  "}>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Plan 1
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             $200.99
//           </Typography>
//         </div>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Tax
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             12%
//           </Typography>
//         </div>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Grand Total
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             $200.99
//           </Typography>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
