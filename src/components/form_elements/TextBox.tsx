"use client";
import { FormController } from "@/components/form_elements/type";
import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const TextBox: React.FC<FormController> = (props) => {
  return (
    <div className={"w-full h-[70px]"}>
      <Controller
        control={props.control}
        name={props.fieldName}
        render={({ field }) => (
          <TextField
            {...field}
            {...props.inputProps}
            error={!!props.errors[props.fieldName]}
            helperText={
              props.errors[props.fieldName] &&
              `${props.errors[props.fieldName]?.message}`
            }
          />
        )}
      />
    </div>
  );
};
