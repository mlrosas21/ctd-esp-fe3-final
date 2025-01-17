import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getFaqs } from "dh-marvel/services/faqs/getFaqs";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FaqsType } from "interface/types";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import Head from "next/head";

interface Props {
  faqs: FaqsType[];
}

const PreguntasFrecuentes = ({ faqs }: Props) => {
  return (
    <LayoutGeneral>
      <Head>
        <title>Preguntas frecuentes</title>
        <meta name="description" content="Preguntas frecuentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography variant="h2" my={4}>Preguntas Frecuentes</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={2}
        >
          {faqs.map((e) => (
            <Accordion key={e.id} sx={{ width: 0.8 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{e.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{e.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </LayoutGeneral>
  );
};

export const getStaticProps = async () => {
  const data = await getFaqs();

  return {
    props: {
      faqs: data,
    },
  };
};

export default PreguntasFrecuentes;
