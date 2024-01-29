"use client";

import React, { SetStateAction, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
export const Component = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={"sjck"}
        defaultValue={null}
        disableFuture={true}
        slotProps={{
          textField: {
            variant: "standard",
            required: true,
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};
