import React from "react";
import { FormInputText } from "./Inputs/FormInputText";
import { useFormContext } from "react-hook-form";
import Typography from "@mui/material/Typography";

const DeliveryInfo = () => {
  const { control } = useFormContext();

  return (
    <>
      <Typography variant="h5" mb={2}>Datos de entrega</Typography>
      <FormInputText
        control={control}
        name="address"
        label="Dirección"
        type="text"
        required
      />

      <FormInputText
        control={control}
        name="address-info"
        label="Apellido"
        type="text"
      />

      <FormInputText
        control={control}
        name="city"
        label="Ciudad"
        type="text"
        required
      />

      <FormInputText
        control={control}
        name="province"
        label="Provincia"
        type="text"
        required
      />

      <FormInputText
        control={control}
        name="zip-code"
        label="Código Postal"
        type="text"
        required
      />
    </>
  );
};

export default DeliveryInfo;
