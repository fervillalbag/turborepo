// import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../src/store";
import "../src/styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
