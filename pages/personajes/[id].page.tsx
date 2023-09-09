import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getCharacter,
  getCharacters,
} from "dh-marvel/services/marvel/marvel.service";
import { Character } from "dh-marvel/interface/types";
import CharacterDetail from "dh-marvel/components/ui/CharacterDetail/CharacterDetail";

interface Props {
  character: Character;
}

const CharacterPage = ({ character }: Props) => {
  return (
    <CharacterDetail character={character}/>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getCharacters();

  const paths = data.map((character: any) => {
    return { params: { id: character.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const character = await getCharacter(id);

  return {
    props: {
      character,
    },
    revalidate: 60,
  };
};

export default CharacterPage;
