import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Character } from "dh-marvel/interface/types";
import styles from "./CharacterCard.module.css";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/router";

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push("/personajes/"+id)
  };

  return (
    <Card onClick={() => handleClick(character.id)}>
      <CardActionArea className={styles.card}>
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
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
