"use client";
import React from "react";
import { FormController } from "@/components/form_elements/type";
import { Controller } from "react-hook-form";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const TextBoxPassword: React.FC<FormController> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};
