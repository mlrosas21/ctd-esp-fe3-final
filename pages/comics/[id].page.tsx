import Box from "@mui/material/Box";
import ComicCard from "dh-marvel/components/ComicCard/ComicCard";
import ComicDetails from "dh-marvel/components/ComicDetails/ComicDetails";
import { Comic } from "dh-marvel/interface/types";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface Props {
  comic: Comic;
}

const ComicPage = ({ comic }: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={0.8}
      p={5}
    >
      <ComicCard {...comic} />
      <ComicDetails comic={comic} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);

  try {
    const res = await getComic(id);

    return {
      props: {
        comic: res,
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
