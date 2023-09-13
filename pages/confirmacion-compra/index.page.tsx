import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ConfirmPage = () => {
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
      <Paper className={styles.root}>
        <Box className={styles.greenSection}>
          <Typography variant="h5" className={styles.confirmText}>
            ¡Que disfrutes tu compra!
          </Typography>
        </Box>
        <Box className={styles.orderSection}>
          <ComicCard {...comic} />
          <Box className={styles.personalInfoSection}>
            <Box>
              <Typography variant="h5" mb={1}>
                Datos Personales:
              </Typography>
              <Box>
                <Box className={styles.info}>
                  <Typography>Nombre completo:</Typography>
                  <Typography>
                    {buyer.personalInfo?.name} {buyer.personalInfo?.lastname}
                  </Typography>
                </Box>
                <Typography>Email: {buyer.personalInfo?.email}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" mb={1}>
                Dirección de Entrega:
              </Typography>
              <Box>
                <Typography>
                  Dirección: {buyer.deliveryInfo?.address} -{" "}
                  {buyer.deliveryInfo?.address2}
                </Typography>
                <Typography>
                  Código postal: {buyer.deliveryInfo?.zip}
                </Typography>
                <Typography>Ciudad: {buyer.deliveryInfo?.city}</Typography>
                <Typography>
                  Provincia: {buyer.deliveryInfo?.province}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" mb={1}>
                Precio final: ${comic.price.toFixed(2)} a debitarse en la
                tarjeta {buyer.paymentInfo?.number.slice(-4)}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ConfirmPage;
