import Box from "@mui/material/Box";
import CharactersGrid from "dh-marvel/components/ui/CharactersGrid/CharactersGrid";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import ComicDetails from "dh-marvel/components/ui/ComicDetails/ComicDetails";
import { Character, Comic } from "dh-marvel/interface/types";
import {
  getComic,
  getComicCharacters,
  getComics,
} from "dh-marvel/services/marvel/marvel.service";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface Props {
  comic: Comic;
  characters: Character[];
}

const ComicPage = ({ comic, characters }: Props) => {
  return (
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
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getComics(0, 12);

  const paths = data.results.map((comic: Comic) => {
    return {
      params: { id: String(comic.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default ComicPage;
