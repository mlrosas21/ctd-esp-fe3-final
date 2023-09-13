import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import { useForm } from "react-hook-form";
import { FormInputText } from "./Inputs/FormInputText";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { paymentSchema as schema } from "./rules";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import useOrderContext from "context/context";
import { Error, Order, PaymentInfo } from "dh-marvel/interface/types";
import { postOrder } from "dh-marvel/services/checkout/postOrder";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";

interface Props {
  prevStep: () => void;
}

const Payment = ({ prevStep }: Props) => {
  const { order, setOrder } = useOrderContext();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  type DataForm = yup.InferType<typeof schema>;

  const { control, handleSubmit, getValues, watch } = useForm<DataForm>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const router = useRouter();

  const onSubmit = async (paymentInfo: PaymentInfo) => {
    setOrder((prevOrder) => {
      return { ...prevOrder, buyer: { ...prevOrder.buyer, paymentInfo } };
    });

    const newOrder: Order = {...order}
    newOrder.buyer = {
      ...newOrder.buyer,
      paymentInfo: paymentInfo
    }

    const response = await postOrder({ order: newOrder });
    const data = await response?.json();
    

    if (!response || response && response.status !== 200) {
      setOpenSnackbar(true);
      setError({ error: data.error, message: data.message });
      return;
    }

    setOpenSnackbar(false);
    router.push("/confirmacion-compra")
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  watch();

  return (
    <>
      <Box mb={4}>
        <Cards
          number={getValues("number") || ""}
          name={getValues("name") || ""}
          expiry={getValues("expiry") || ""}
          cvc={getValues("cvc") || ""}
        />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          control={control}
          name="number"
          label="Número de la tarjeta"
          type="text"
          inputProps={{
            maxLength: 16,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
        <FormInputText
          control={control}
          name="name"
          label="Nombre (como aparece en la tarjeta)"
          type="text"
        />
        <Box display={"flex"} justifyContent={"space-between"} gap={2}>
          <FormInputText
            control={control}
            name="expiry"
            label="Fecha de expiración (MMYY)"
            type="tel"
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
              pattern: "[0-9]*",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <Button onClick={prevStep}>Anterior</Button>
          <Button type="submit" variant="contained">Finalizar</Button>
        </Box>

        <Snackbar
          open={openSnackbar}
          message={error?.message}
          onClose={handleSnackbarClose}
        >
          <Alert severity="error">{error?.message}</Alert>
        </Snackbar>
      </form>
    </>
  );
};

export default Payment;
