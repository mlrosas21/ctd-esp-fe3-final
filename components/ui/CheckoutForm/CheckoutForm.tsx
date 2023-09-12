import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import PersonalData from "./PersonalData";
import { useFormContext } from "react-hook-form";
import Paper from "@mui/material/Paper";
import DeliveryInfo from "./DeliveryInfo";
import Payment from "./Payment";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevStep: number) => prevStep - 1);
  };

  return (
    <Paper sx={{ padding: 3, height: "100%" }}>
      {activeStep === 1 && <PersonalData nextStep={nextStep} />}

      {activeStep === 2 && <DeliveryInfo nextStep={nextStep} prevStep={prevStep} />}

      {activeStep === 3 && <Payment prevStep={prevStep} />}

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
      >
        <Button onClick={prevStep} disabled={activeStep === 1}>
          Anterior
        </Button>
        {activeStep < 3 && <Button onClick={nextStep}>Siguiente</Button>}
        {activeStep === 3 && <Button type="submit">Finalizar</Button>}
      </Box> */}
    </Paper>
  );
};

export default CheckoutForm;
