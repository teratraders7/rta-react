import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function HomePage() {
  return (
    <>

      <Header />
      <div className="container">
        <Main />

      </div>

      <Footer />

    </>
  );
}

export default HomePage;
