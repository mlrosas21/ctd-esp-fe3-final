import Box from "@mui/material/Box";
import useOrderContext from "context/context";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import CharactersGrid from "dh-marvel/components/ui/CharactersGrid/CharactersGrid";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import ComicDetails from "dh-marvel/components/ui/ComicDetails/ComicDetails";
import { Character, Comic } from "dh-marvel/interface/types";
import {
  getComic,
  getComicCharacters,
  getComics,
} from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";

interface Props {
  comic: Comic;
  characters: Character[];
}

const ComicPage = ({ comic, characters }: Props) => {
  const { resetOrder } = useOrderContext();

  useEffect(() => {
    resetOrder();
  }, [resetOrder]);

  return (
    <LayoutGeneral>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={5}
        >
          <ComicCard {...comic} />
          <ComicDetails comic={comic} />
        </Box>
        <CharactersGrid characters={characters} />
      </Box>
    </LayoutGeneral>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id);

  try {
    const comic = await getComic(id);
    const characters = await getComicCharacters(id);

    return {
      props: {
        comic,
        characters,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        comic: {},
      },
    };
  }
};

export default ComicPage;
