import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { FormEvent, useState } from "react";
import PersonalData from "./PersonalData";
import { useFormContext } from "react-hook-form";
import Paper from "@mui/material/Paper";
import DeliveryInfo from "./DeliveryInfo";
import Payment from "./Payment";
import styles from "./CheckoutForm.module.css"

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevStep: number) => prevStep - 1);
  };

  const { handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {
    console.log(data);

    alert("submitted");
  };

  return (
    <Paper sx={{ padding: 3, height: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

        {activeStep === 1 && <PersonalData />}

        {activeStep === 2 && <DeliveryInfo />}

        {activeStep === 3 && <Payment />}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
          {activeStep > 1 && <Button onClick={prevStep}>Anterior</Button>}
          {activeStep < 3 && <Button onClick={nextStep}>Siguiente</Button>}
          {activeStep === 3 && <Button type="submit">Finalizar</Button>}
        </Box>
      </form>
    </Paper>
  );
};

export default CheckoutForm;
