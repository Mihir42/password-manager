import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import propTypes from "prop-types";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container" id="container">
        {children}
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = { children: propTypes.element };

export default Layout;
