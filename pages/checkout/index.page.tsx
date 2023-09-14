import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import CheckoutForm from "dh-marvel/components/ui/CheckoutForm/CheckoutForm";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import Head from "next/head";

const CheckoutPage = () => {
  const {
    order: { comic, buyer },
  } = useOrderContext();

  const router = useRouter();

  useEffect(() => {
    if (!comic || !buyer) {
      router.push("/");
    }
  }, [comic, buyer, router]);

  if (!comic || !buyer) return;

  return (
    <>
      <LayoutCheckout>
        <Head>
          <title>Checkout</title>
          <meta name="description" content="Formulario de compra" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"stretch"}
          gap={5}
          width={1}
          height={0.9}
          m={4}
          className={styles.container}
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
          <Box minWidth={0.5}>
            <CheckoutForm />
          </Box>
        </Box>
      </LayoutCheckout>
    </>
  );
};

export default CheckoutPage;
