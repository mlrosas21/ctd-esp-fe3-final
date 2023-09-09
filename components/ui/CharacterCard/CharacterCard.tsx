import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Character } from "dh-marvel/interface/types";
import styles from "./CharacterCard.module.css"

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" sx={{ wordBreak: "break-word" }}>
          {character.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        className={styles.image}
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default CharacterCard;
