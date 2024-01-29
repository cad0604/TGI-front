"use client";
import {
  FormController,
  FormControllerSelect,
} from "@/components/form_elements/type";
import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
export const SelectBox: React.FC<FormControllerSelect> = (props) => {
  return (
    <div className={"w-full h-[70px]"}>
      <Controller
        control={props.control}
        name={props.fieldName}
        render={({ field }) => (
          <TextField
            id="select"
            select={true}
            {...field}
            {...props.inputProps}
            error={!!props.errors[props.fieldName]}
            helperText={
              props.errors[props.fieldName] &&
              `${props.errors[props.fieldName]?.message}`
            }
          >
            {props.children}
          </TextField>
        )}
      />
    </div>
  );
};
// <TextField

// />
