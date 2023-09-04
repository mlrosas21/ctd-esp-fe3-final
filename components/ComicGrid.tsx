import React from "react";
import Grid from "@mui/material/Grid";
import { Comic } from "dh-marvel/interface/types";
import ComicCard from "./ComicCard";

interface Props {
  comics: Comic[];
}

const ComicGrid = ({ comics }: Props) => {
  return (
    <Grid py={3} container spacing={3} columns={{ xs: 4, sm: 9, md: 12, xl: 12 }}>
      {comics.map((comic) => (
        <Grid item xs={2} sm={3} md={3} xl={3} key={comic.id}>
          <ComicCard key={comic.id} {...comic} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ComicGrid;
