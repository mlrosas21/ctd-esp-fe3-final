import React from "react";
import Grid from "@mui/material/Grid";
import { Comic } from "dh-marvel/interface/types";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ComicCard from "../ComicCard/ComicCard";

interface Props {
  comics: Comic[];
}

const ComicGrid = ({ comics }: Props) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/comics/${id}`);
  };

  return (
    <Grid
      py={3}
      container
      spacing={3}
      columns={{ xs: 4, sm: 9, md: 12, xl: 12 }}
      alignItems="stretch"
    >
      {comics.map((comic) => (
        <Grid item xs={2} sm={3} md={3} xl={3} key={comic.id}>
          <ComicCard key={comic.id} {...comic}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {comic.title}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto", p: 3 }}>
              <Button size="small" variant="contained">
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
