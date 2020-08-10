import { func, object } from "prop-types";
import "../css/index.css";
const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: func,
  pageProps: object,
};

export default App;
