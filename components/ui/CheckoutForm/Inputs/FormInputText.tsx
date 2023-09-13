import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Control, Controller, useController } from "react-hook-form";

interface FormInputText {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  control: Control<any>;
  defaultValue?: string;
  error?: boolean;
  message?: string;
  inputProps?: any;
}

export const FormInputText = ({
  control,
  name,
  label,
  required,
  type,
  inputProps,
  defaultValue,
}: FormInputText) => {
  const {
    formState: { errors },
    fieldState: {invalid, error}
  } = useController({
    name: name,
    control,
    defaultValue,
  });

  return (
    <Box mb={2}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            fullWidth
            required={required}
            type={type}
            inputProps={inputProps}
          />
        )}
      />
      {invalid && error && <Typography variant="caption" color={"red"}>{error?.message}</Typography>}
    </Box>
  );
};
