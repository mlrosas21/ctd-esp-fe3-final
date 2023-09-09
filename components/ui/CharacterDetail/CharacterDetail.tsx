import Box from "@mui/material/Box";
import { Character } from "dh-marvel/interface/types";
import React from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface Props {
  character: Character;
}

const CharacterDetail = ({ character }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={1}
    >
      <Image
        alt={`${character?.name}'s image`}
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        width={500}
        height={500}
      />
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h2" py={2}>
          {character?.name}
        </Typography>
        <Typography>
          {character?.description || "Sin biografía disponible"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CharacterDetail;
