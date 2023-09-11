import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import CheckoutForm from "dh-marvel/components/ui/CheckoutForm/CheckoutForm";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import { NextPage } from "next";
import React from "react";

const CheckoutPage: NextPage = () => {
  const { order, setOrder } = useOrderContext();

  if (!order) {
    return null; 
  }

  return (
    <>
      <Typography variant="h3">Checkout</Typography>
      <Box display={"flex"} alignItems={"center"}>
        <ComicCard {...order} />
        <CheckoutForm />
      </Box>
    </>
  );
};

export default CheckoutPage;
