import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Networks from "./components/Networks/Networks";
import Footer from "./components/Footer";
import ErrorPage from "./components/Extras/ErrorPage";
import Loading from "./Loading";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
  }, [])
  if (loading) {
      return <Loading/>
  }

  return (
    <Router>
      <Preloader load={loading} />
      <div className="App" id={loading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeWithLayout />} />
          <Route path="/networks" element={<NetworksWithLayout />} />
          <Route path="/about" element={<AboutWithLayout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

function EmptyLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Footer />
    </>
  );
}

function HomeWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </>
  );
}

function NetworksWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <Networks />
      <Footer />
    </>
  );
}

function AboutWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <About />
      <Footer />
    </>
  );
}

export default App;
