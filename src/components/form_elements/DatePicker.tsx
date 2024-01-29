import React from "react";
import { FormController } from "@/components/form_elements/type";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";

export const DatePickerBox: React.FC<FormController> = (props) => {
  return (
    <div className={"w-full h-[70px]"}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          control={props.control}
          name={props.fieldName}
          render={({ field }) => (
            <DatePicker
              {...field}
              {...props.DatePickerComponent}
              defaultValue={null}
              disableFuture={true}
              slotProps={{
                textField: {
                  variant: "standard",
                  required: true,
                  error: !!props.errors[props.fieldName],
                  helperText:
                    props.errors[props.fieldName] &&
                    `${props.errors[props.fieldName]?.message}`,
                  fullWidth: true,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
