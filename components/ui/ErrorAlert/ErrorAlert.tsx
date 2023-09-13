import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React from "react";
import { Error } from "dh-marvel/interface/types";

interface Props {
  error: Error;
}

const ErrorAlert = ({ error }: Props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error (code: <strong>{error.error}</strong>)</AlertTitle>
      {error.message}
    </Alert>
  );
};

export default ErrorAlert;
