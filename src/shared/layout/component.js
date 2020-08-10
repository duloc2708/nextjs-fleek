import Head from "next/head";
import Footer from "./footer";
const Wrapper = ({ children }) => (
  <div className="app-wrapper">
    <div className="app-content">{children}</div>
    <Footer />
  </div>
);

export default Wrapper;
