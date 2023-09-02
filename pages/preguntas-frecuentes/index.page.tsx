import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Faq } from "dh-marvel/interface/faqs";
import { getFaqs } from "dh-marvel/services/faqs/getFaqs";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface Props {
  faqs: Faq[];
}

const PreguntasFrecuentes = ({ faqs }: Props) => {
  return (
    <Container>
      <Typography variant="h2">Preguntas Frecuentes</Typography>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={2}>
        {faqs.map((e) => (
          <Accordion key={e.id} sx={{ maxWidth: 0.8 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{e.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{e.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
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
