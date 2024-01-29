"use client";
import {
  FormControlleCheckBox,
  FormController,
} from "@/components/form_elements/type";
import React from "react";
import { Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";
import { FormControl } from "@mui/base";
import Link from "next/link";
export const CheckBox: React.FC<FormControlleCheckBox> = (props) => {
  return (
    <div className={"w-full h-[70px]"}>
      <Controller
        control={props.control}
        name={props.fieldName}
        render={({ field }) => (
          <FormControl error={!!props.errors[props.fieldName]}>
            <FormControlLabel
              label={
                <Typography sx={{ fontSize: 13 }}>
                  <Link href={"#"}>{props.label}</Link>
                </Typography>
              }
              required={true}
              control={<Checkbox {...field} />}
            />
            <FormHelperText>
              {props.errors[props.fieldName] &&
                `${props.errors[props.fieldName]?.message}`}
            </FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
};
