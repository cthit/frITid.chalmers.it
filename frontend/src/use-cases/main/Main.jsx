import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { List, Typography, Hidden, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GammaTabs from "../../common/elements/gamma-tabs";
import BiMapPathAndIndex from "../../common/declaratives/bi-map-path-and-index";
import AboutUs from "./screens/about-us";
import Activities from "./screens/activities";
import ContactUs from "./screens/contact-us";

import { Fill, Center, Padding, Spacing } from "../../common-ui/layout";

export class Main extends Component {
  render() {
    return (
      <Fill>
        <BiMapPathAndIndex
          maybeNewPath={window.location.pathname}
          maybeNewIndex={undefined}
          pathAndIndexMap = {{
            "/activities": 0,
            "/about-us": 1,
            "/contact-us": 2
          }}
          render={( currentIndex, handleChange ) => (
            <div>
            </div>
         )}
        />
      </Fill>
    );
  }
}

export default Main;
