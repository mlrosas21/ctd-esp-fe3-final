import React from "react";
import Grid from "@mui/material/Grid";
import { Comic } from "dh-marvel/interface/types";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import ComicCard from "../ComicCard/ComicCard";
import styles from "./ComicGrid.module.css";
import useOrderContext from "context/context";

interface Props {
  comics: Comic[];
}

const ComicGrid = ({ comics }: Props) => {
  const { setOrder } = useOrderContext();
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/comics/${id}`);
  };

  const handlePurchase = async (idComic: number) => {
    const response = await fetch(`/api/compra-rapida/?id=${idComic}`);

    const comic = await response.json();
    const { stock } = comic as Comic;

    if (stock === 0) handleClick(idComic);

    setOrder((prevOrder) => {
      return { ...prevOrder, comic };
    });

    router.push("/checkout");
  };

  return (
    <Grid
      py={3}
      container
      spacing={3}
      columns={{ xs: 3, sm: 6, md: 9, xl: 12 }}
      alignItems="stretch"
    >
      {comics.map((comic) => (
        <Grid
          item
          xs={2}
          sm={3}
          md={3}
          xl={3}
          key={comic.id}
          className={styles.card}
        >
          <ComicCard key={comic.id} {...comic}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.title}
              >
                {comic.title}
              </Typography>
            </CardContent>
            <CardActions className={styles.buttonsContainer}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handlePurchase(comic.id)}
              >
                Comprar
              </Button>
              <Button size="small" onClick={() => handleClick(comic.id)}>
                Ver detalle
              </Button>
            </CardActions>
          </ComicCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ComicGrid;
