import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import CheckoutForm from "dh-marvel/components/ui/CheckoutForm/CheckoutForm";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CheckoutPage: NextPage = () => {
  const {
    order: { comic, buyer },
  } = useOrderContext();

  const router = useRouter()

  useEffect(() => {
    if (!comic || !buyer) {
      router.push("/");
    }
  }, [comic, buyer, router]);

  if (!comic || !buyer) return;

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"stretch"}
        gap={5}
        width={1}
        height={0.9}
        m={4}
      >
        <ComicCard {...comic}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {comic.title}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"baseline"}
            >
              <Typography gutterBottom variant="body2" component="div">
                Detalle de compra:
              </Typography>
              <Typography gutterBottom component="div">
                $ {comic.price.toFixed(2)} - 1 un.
              </Typography>
            </Box>
          </CardContent>
        </ComicCard>
        <Box width={0.5}>
          <CheckoutForm />
        </Box>
      </Box>
    </>
  );
};

export default CheckoutPage;
