import TextField from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

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
  inputProps
}: FormInputText) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          required={required}
          type={type}
          sx={{ mb: 2 }}
          inputProps={inputProps}
        />
      )}
    />
  );
};


