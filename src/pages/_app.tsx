import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import createEmotionCache from '@/utils/createEmotionCache';
import StylesGlobal from '@/components/GlobalStyles';
import theme from '@/config/theme';

const clientSideEmotionCache = createEmotionCache();

interface MsfAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MsfAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <StylesGlobal />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </CacheProvider>
  );
}
