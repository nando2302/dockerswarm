import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Tracking from "./Content/Tracking/Tracking";
import Home from "./Content/Home/Home";
import ShippingFee from "./Content/ShippingFee/ShippingFee";
import Service from "./Content/Service/Service";
import Profile from "./Content/Profile/Profile";
import Contact from "./Content/Contact/Contact";
import Header from "./Components/Header";
import ForbiddenItem from "./Content/Forbidden-Item/ForbiddenItem";
import Privacypolicy from "./Content/PrivacyPolicy/Privacypolicy";

export default function App() {
  return (
    <Router>
      <Header />
      {/* <Banner /> */}
      <Switch>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/tracking">
          <Tracking />
        </Route>
        <Route path="/shipping-fee">
          <ShippingFee />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/forbiddenitem">
          <ForbiddenItem />
        </Route>
        <Route path="/privasipolicy">
          <Privacypolicy />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

// export default App;
