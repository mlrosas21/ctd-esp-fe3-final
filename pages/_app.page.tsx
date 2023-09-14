import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "dh-marvel/styles/material-theme";
import { OrderProvider } from "context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */

          #__next {
            height: 100%;
          }
        `}</style>
      </ThemeProvider>
    </OrderProvider>
  );
}

export default MyApp;
