import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import { useFormContext, useWatch } from "react-hook-form";
import { FormInputText } from "./Inputs/FormInputText";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// * Finalmente, la sección de pago deberá disponer de los siguientes campos `obligatorios`:
//   * Número de tarjeta
//   * Nombre como aparece en la tarjeta
//   * Fecha de expiración
//   * Código de seguridad `(secreto estilo contraseña ***)`

const Payment = () => {
  const { control, getValues } = useFormContext();

  useWatch();

  return (
    <div>
      <Typography variant="h5" mb={2}>Datos del pago</Typography>
      <Box mb={2}>
        <Cards
          number={getValues("card-number") || ""}
          name={getValues("card-name") || ""}
          expiry={getValues("card-expiry") || ""}
          cvc={getValues("cvc") || ""}
        />
      </Box>

      <FormInputText
        control={control}
        name="card-number"
        label="Número de la tarjeta"
        type="text"
        required
        inputProps={{
          maxLength: 16,
          inputMode: "numeric",
          pattern: "[0-9]*", // Use this pattern to allow only numeric characters
        }}
      />

      <FormInputText
        control={control}
        name="card-name"
        label="Nombre (como aparece en la tarjeta)"
        type="text"
      />
      <Box display={"flex"} gap={2}>
        <FormInputText
          control={control}
          name="card-expiry"
          label="Fecha de expiración (MMYY)"
          type="tel"
          required
          inputProps={{
            maxLength: 4,
          }}
        />

        <FormInputText
          control={control}
          name="cvc"
          label="Código de seguridad (CVC)"
          type="password"
          inputProps={{
            maxLength: 3,
            inputMode: "numeric",
            pattern: "[0-9]*", // Use this pattern to allow only numeric characters
          }}
          required
        />
      </Box>
    </div>
  );
};

export default Payment;
