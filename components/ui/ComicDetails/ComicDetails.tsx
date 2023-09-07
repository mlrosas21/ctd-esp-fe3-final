import React from "react";
import { Comic } from "dh-marvel/interface/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./ComicDetails.module.css";

// ### Página 2: Detalle del Cómic (Comic)

// En esta página se deberá mostrar un detalle de un cómic seleccionado junto al precio y stock del mismo.

// Se deberá tener en cuenta lo siguiente:
//   * Nombre del comic
//   * Descripción del comic
//   * Imagen principal
//   * Precio
//   * Precio anterior
//   * Botón de compra: en función de la disponibilidad de stock
//     * Si hay stock, el botón debe aparecer habilitado y ser funcional
//     * Si no hay stock, el botón debe estar deshabilitado y en gris, con el mensaje: Sin stock disponible
//   * Lista de personajes asociados al cómic, con links a la página de cada personaje
// * Permitir que el contenido sea indexable por los buscadores.
// * Esta página debera utilizar el [Layout General](#layout-general)

interface Props {
  comic: Comic;
}

const ComicDetails = ({ comic }: Props) => {
  return (
    <>
      <Box className={styles.comicDetailBox}>
        <Typography variant="body2" className={styles.isbnTag}>
          ISBN: {comic.isbn}
        </Typography>
        <Typography variant="h4">{comic.title}</Typography>
        <Typography variant="body1" className={styles.comicDescription}>
          {comic.description || "Sin descripción disponible."}
        </Typography>

        <Box className={styles.price}>
          <Typography className={styles.oldPrice}>
            $ {comic.oldPrice.toFixed(2)}
          </Typography>

          <Box className={styles.mainTag}>
            <Typography variant="h5" className={styles.currentPrice}>
              $ {comic.price.toFixed(2)}
            </Typography>

            <Typography variant="body2" className={styles.discount}>
              {((1 - comic.price / comic.oldPrice) * 100).toFixed(2)} % OFF
            </Typography>
          </Box>
          <Typography variant="body2">Stock: {comic.stock} un.</Typography>
        </Box>
        {comic.stock > 0 && <Button variant="contained">Comprar</Button>}
      </Box>
    </>
  );
};

export default ComicDetails;
