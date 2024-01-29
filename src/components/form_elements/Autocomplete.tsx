"use client";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { FormControllerAutocomplete } from "@/components/form_elements/type";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
interface Option {
  label: string;
}
export const AutocompleteBox: React.FC<FormControllerAutocomplete> = (
  props
) => {
  return (
    <div className={"w-full h-[70px]"}>
      <Controller
        control={props.control}
        name={props.fieldName}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={props.options as Option[]} // Asserting the type here
            getOptionLabel={(option: Option) => option.label}
            onChange={(e, value) => {
              field.onChange(value?.label);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...props.inputProps}
                error={!!props.errors[props.fieldName]}
                helperText={
                  props.errors[props.fieldName] &&
                  `${props.errors[props.fieldName]?.message}`
                }
              />
            )}
          />
        )}
      />
    </div>
  );
};
