import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import styles from "./OrderConfirmed.module.css";
import CardContent from "@mui/material/CardContent";
import { Buyer, Comic } from "dh-marvel/interface/types";

interface Props {
  comic: Comic;
  buyer: Buyer;
}

const OrderConfirmed = ({ comic, buyer }: Props) => {
  return (
    <Paper className={styles.root}>
      <Box className={styles.greenSection}>
        <Typography variant="h5" className={styles.confirmText}>
          ¡Que disfrutes tu compra!
        </Typography>
      </Box>
      <Box className={styles.orderSection}>
        <ComicCard {...comic}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {comic.title}
            </Typography>
          </CardContent>
        </ComicCard>
        <Box className={styles.personalInfoSection}>
          <Paper sx={{ padding: 3 }}>
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
              <Box className={styles.info}>
                <Typography>Email:</Typography>
                <Typography>{buyer.personalInfo?.email}</Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h5" mb={1}>
              Dirección de Entrega:
            </Typography>
            <Box>
              <Box className={styles.info}>
                <Typography>Dirección:</Typography>
                <Typography>
                  {buyer.deliveryInfo?.address} - {buyer.deliveryInfo?.address2}
                </Typography>
              </Box>
              <Box className={styles.info}>
                <Typography>Código postal:</Typography>
                <Typography>{buyer.deliveryInfo?.zip}</Typography>
              </Box>
              <Box className={styles.info}>
                <Typography>Ciudad:</Typography>
                <Typography>{buyer.deliveryInfo?.city}</Typography>
              </Box>
              <Box className={styles.info}>
                <Typography>Provincia:</Typography>
                <Typography>{buyer.deliveryInfo?.province}</Typography>
              </Box>
            </Box>
          </Paper>
          <Box className={styles.priceSection}>
            <Typography variant="h5" mb={1}>
              Precio final: ${comic.price.toFixed(2)}
            </Typography>
            <Typography>
              a debitarse en la tarjeta finalizada en{" "}
              {buyer.paymentInfo?.number.slice(-4)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default OrderConfirmed;
