import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import ComicCard from "dh-marvel/components/ui/ComicCard/ComicCard";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import OrderConfirmed from "dh-marvel/components/ui/OrderConfirmed/OrderConfirmed";

const ConfirmPage = () => {
  const {
    order: { comic, buyer },
  } = useOrderContext();

  const router = useRouter();

  useEffect(() => {
    if (!comic || !buyer) {
      router.push("/");
    }
  }, [comic, buyer, router]);

  if (!comic || !buyer) return null;

  return <OrderConfirmed comic={comic} buyer={buyer} />;
};

export default ConfirmPage;
