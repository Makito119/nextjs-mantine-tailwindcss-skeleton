import 'src/styles/globals.css';

import type { AppProps } from 'next/app';
import { AppProvider } from 'src/provider';

const App = (props: AppProps) => {
  return (
    <AppProvider>
      <props.Component {...props.pageProps} />
    </AppProvider>
  );
};

export default App;
