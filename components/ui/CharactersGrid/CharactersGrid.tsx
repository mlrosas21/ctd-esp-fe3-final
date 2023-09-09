import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Character } from "dh-marvel/interface/types";
import CharacterCard from "../CharacterCard/CharacterCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./CharactersGrid.module.css"

interface Props {
  characters: Character[];
}

const CharactersGrid = ({ characters }: Props) => {
  return (
    <>
      <Typography variant="h4" className={styles.title}>
        Personajes presentes
      </Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 9, md: 12, xl: 12 }}
        className={styles.grid}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    </>
  );
};

export default CharactersGrid;
