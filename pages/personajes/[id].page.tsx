import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getCharacter,
  getCharacters,
} from "dh-marvel/services/marvel/marvel.service";
import { Character } from "dh-marvel/interface/types";
import CharacterDetail from "dh-marvel/components/ui/CharacterDetail/CharacterDetail";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import Head from "next/head";

interface Props {
  character: Character;
}

const CharacterPage = ({ character }: Props) => {
  return (
    <LayoutGeneral>
      <Head>
        <title>Detalle de personaje</title>
        <meta name="description" content="Página de descripción de personaje" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CharacterDetail character={character} />
    </LayoutGeneral>
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
