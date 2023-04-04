import '@styles/globals.css';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
