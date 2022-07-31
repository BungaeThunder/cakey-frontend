import type { AppProps } from 'next/app';
import GlobalFonts from 'public/fonts/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalFonts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
