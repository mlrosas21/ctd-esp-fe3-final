import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInputText } from "./Inputs/FormInputText";
import Typography from "@mui/material/Typography";

const PersonalData = () => {
  const { control } = useFormContext();

  return (
    <>
      <Typography variant="h5" mb={4}>Datos personales</Typography>
      
      <FormInputText control={control} name="name" label="Nombre" type="text" required />

      <FormInputText
        control={control}
        name="lastname"
        label="Apellido"
        type="text"
        required
      />

      <FormInputText
        control={control}
        name="email"
        label="Email"
        type="email"
        required
      />
    </>
  );
};

export default PersonalData;
