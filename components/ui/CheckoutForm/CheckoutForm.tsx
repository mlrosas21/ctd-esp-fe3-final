import React, { useState } from "react";
import PersonalData from "./PersonalData";
import Paper from "@mui/material/Paper";
import DeliveryInfo from "./DeliveryInfo";
import Payment from "./Payment";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevStep: number) => prevStep - 1);
  };

  return (
    <Paper className={styles.form}>
      <Stepper activeStep={activeStep} className={styles.stepper} alternativeLabel>
        <Step>
          <StepLabel>Datos Personales</StepLabel>
        </Step>
        <Step>
          <StepLabel>Datos del envío</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pago</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 0 && <PersonalData nextStep={nextStep} />}

      {activeStep === 1 && (
        <DeliveryInfo nextStep={nextStep} prevStep={prevStep} />
      )}

      {activeStep === 2 && <Payment prevStep={prevStep} />}
    </Paper>
  );
};

export default CheckoutForm;
