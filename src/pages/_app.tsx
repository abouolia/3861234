import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../app/store';
import { ApplicationProvider } from '../contexts/ApplicationContext';
import { GlobalStyle } from '../components'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <ApplicationProvider>
        <Component {...pageProps} />
      </ApplicationProvider>
    </Provider>
  );
}
