import '../styles/global.css';

/**
 * This App component is the top-level component which will be common across all the
 * different pages.
 */
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}