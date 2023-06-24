import Head from 'next/head';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { register } from 'swiper/element/bundle';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import theme from '@/src/theme';

export default function App({ Component, pageProps }) {
  register();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CssBaseline />
      <Container maxWidth="md" sx={{ height: '100%' }}>
        <Component {...pageProps} />
      </Container>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
          margin: 0;
          scroll-behavior: smooth;
        }
        .swiper-container-free-mode > .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </ThemeProvider>
  );
}
