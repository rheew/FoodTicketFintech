import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import homeHosting from "./pages/Home/HomeHosting";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

import Customer from "./pages/Customer.js";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js";
import MapMarker from "./Components/map/MapMarker.js";
import NotFound from "./pages/404";
/*------ Pages-----*/

// TODO : axios호출 시 jwt 같이 보내야 함. // server는 token 검증하는 로직 필요
class App extends Component {
  constructor(props) {
    super(props);
    window.sessionStorage.setItem("logged", "false");
  }

  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={homeHosting} />
          <ScrollToTopRoute exact={true} path={"/signUp"} component={SignUp} />
          <ScrollToTopRoute exact={true} path={"/login"} component={Login} />
          <ScrollToTopRoute exact={true} path="/Main" exact component={MainMenu} />
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
          <ScrollToTopRoute exact={true} path="/MapMarker" exact component={MapMarker} />
          <ScrollToTopRoute exact={true} path="/StoreReg" exact component={StoreReg} />
          <ScrollToTopRoute component={NotFound} />

          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
