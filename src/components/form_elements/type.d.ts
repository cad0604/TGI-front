import { Control, Controller, FieldErrors, useForm } from "react-hook-form";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { AutocompleteBox } from "@/components/form_elements/Autocomplete";
import { DatePickerSlotsComponentsProps } from "@mui/x-date-pickers";
import { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import { FormControlLabelProps } from "@mui/material/FormControlLabel/FormControlLabel";
interface FormController {
  inputProps?: TextFieldProps;
  DatePickerComponent?: DatePickerComponent;
  DatePickerInputProps?: DatePickerSlotsComponentsProps;
  control: Control<any>;
  errors: FieldErrors;
  fieldName: string;
}
interface FormControllerAutocomplete extends FormController {
  options: unknown[];
}

interface FormControllerSelect extends FormController {
  children?: React.ReactNode;
}
interface FormControlleCheckBox extends FormController {
  FormControlLabelProps?: FormControlLabelProps;
  label: string;
}
interface FileUploadProps {
  onFileSelected: (file: File | null) => void;
  defaultFile?: File | null;
  title?: string;
  defaultFileUrl?: string;
}
interface FileUploadPropsOne {
  control: Control<any>;
  errors: FieldErrors;
  fieldName: string;
  title?: string;
  defaultFileUrl?: string;
}
