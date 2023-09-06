import React, { useEffect } from "react";
import ComicCard from "../ComicCard/ComicCard";
import { Comic } from "dh-marvel/interface/types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
      <Box className="description">
        <Typography variant="body2" className="pre">
          {comic.isbn}
        </Typography>
        <Typography variant="h4">{comic.title}</Typography>
        <Typography variant="body1" className="desc">
          {comic.description || "Sin descripción disponible."}
        </Typography>
        <Box>Stock: {comic.stock}</Box>
        <Box className="price">
          <Box className="main-tag">
            <Typography variant="h5">{comic.oldPrice}</Typography>
            <Typography variant="body2">
              comic.price/comic.oldPrice*100
            </Typography>
          </Box>
          <Typography variant="body2">
            <s>{comic.price}</s>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ComicDetails;
