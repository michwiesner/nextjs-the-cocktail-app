import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import SearchBar from "../components/SearchBar";
import "material-symbols";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SearchBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
