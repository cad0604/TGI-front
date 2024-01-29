"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <div
      className={
        "mt-4 w-full bg-[#032E42] flex flex-col md:flex-row h-fit py-6 px-[16px]  gap-4 justify-between items-start"
      }
    >
      <div>
        <img width={200} src={"/logotg.png"} alt={"logo"} />
      </div>
      <div
        className={"w-full flex   flex-col md:flex-row gap-20 justify-center "}
      >
        <div>
          <h4 className={"uppercase font-bold text-[20px] text-white"}>
            <span
              className={"underline underline-offset-8 decoration-red-800  "}
            >
              cont
            </span>
            act info
          </h4>
          <ul className={"mt-3.5 text-white text-sm capitalize space-y-4"}>
            <div className={"flex flex-row items-center gap-2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p>175 Pearl Street BROOKYN, NY 11201</p>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <p>(+1) 888-303-3884</p>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>hello@tgiscaleme.com</p>
            </div>
          </ul>
        </div>
        <div>
          <h4 className={"uppercase font-bold text-[20px] text-white"}>
            <span
              className={"underline underline-offset-8 decoration-red-800  "}
            >
              serv
            </span>
            ices
          </h4>
          <ul className={"mt-3.5 text-white text-sm capitalize space-y-4"}>
            <li>
              <Link href={"#"}>Credit Education </Link>
            </li>
            <li>
              <Link href={"#"}> Business Credit</Link>
            </li>
            <li>
              <Link href={"#"}> Credit Consulting</Link>
            </li>
            <li>
              <Link href={"#"}> Finance Consulting</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={"uppercase font-bold text-[20px] text-white"}>
            <span
              className={"underline underline-offset-8 decoration-red-800  "}
            >
              subsc
            </span>
            ribe newsletter
          </h4>
          <form className={"mt-3.5 flex flex-col w-full gap-2"}>
            <input
              type={"email"}
              required={true}
              placeholder={"Email Address"}
              className={"rounded-md outline-none px-2 w-full py-2 bg-white"}
            />
            <Button
              fullWidth={true}
              type={"submit"}
              variant={"outlined"}
              color={"red"}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const SubFooter = () => {
  return (
    <div
      className={
        "w-full p-2  flex flex-row items-center justify-center  bg-[#033A53] text-white text-sm"
      }
    >
      © 2024. Official TGIscalme.com Website
    </div>
  );
};
