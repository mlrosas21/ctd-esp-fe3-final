import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInputText } from "./Inputs/FormInputText";
import Typography from "@mui/material/Typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { personalDataSchema as schema } from "./rules";
import { OrderContextType, PersonalInfo } from "dh-marvel/interface/types";
import useOrderContext from "context/context";

interface Props {
  nextStep: () => void;
}

const PersonalData = ({ nextStep }: Props) => {
  const {
    order: { buyer },
    setOrder,
  } = useOrderContext();
  type DataForm = yup.InferType<typeof schema>;

  const { control, handleSubmit, setValue } = useForm<DataForm>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  useEffect(() => {
    if (buyer && buyer.personalInfo) {
      const personalInfoData = buyer.personalInfo;

      setValue("name", personalInfoData.name);
      setValue("lastname", personalInfoData.lastname);
      setValue("email", personalInfoData.email);
    }
  }, [buyer, setValue]);

  const onSubmit = (data: PersonalInfo) => {
    setOrder((prevOrder) => {
      return {
        ...prevOrder,
        buyer: { ...prevOrder.buyer, personalInfo: data },
      };
    });

    nextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          control={control}
          name="name"
          label="Nombre"
          type="text"
          defaultValue=""
        />

        <FormInputText
          control={control}
          name="lastname"
          label="Apellido"
          type="text"
          defaultValue=""
        />

        <FormInputText
          control={control}
          name="email"
          label="Email"
          type="email"
          defaultValue=""
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "auto",
          }}
        >
          <Button type="submit">Siguiente</Button>
        </Box>
      </form>
    </>
  );
};

export default PersonalData;
