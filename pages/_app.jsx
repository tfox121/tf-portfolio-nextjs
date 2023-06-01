import { Container } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <>
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
      `}</style>
    </>
  );
}
