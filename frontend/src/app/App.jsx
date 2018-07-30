import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { List, Typography, Hidden, Tab } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Demo from "../use-cases/demo";
import GammaTabs from "../common/elements/gamma-tabs";
import BiMapPathAndIndex from "../common/declaratives/bi-map-path-and-index";
import AboutUs from "../use-cases/about-us";
import Activities from "../use-cases/activities";
import ChalmersChampionships from "../use-cases/chalmers-championships";
import GammaComponentSelector from "../common/elements/gamma-component-selector";


import {
  StyledRoot,
  StyledAppBar,
  StyledMain,
  StyledMobileMain,
  StyledToolbar,
  StyledFooter,
  StyledTabs
} from "./App.styles";

import { Fill, Center, Padding, Spacing } from "../common-ui/layout";


export class App extends Component {

  constructor(props) {
    super(props);
    const paths = ["/activities", "/about-us", "/chalmers-championships"];
    const labels = ["Activities", "About Us", "Championships"];
    const index = paths.indexOf(window.location.pathname) === -1 ?
      0 : paths.indexOf(window.location.pathname) ;
    this.state = {
      paths: paths,
      labels: labels,
      index: index,
      redirect: false
    };
  }

  handleIndexChange(event, newIndex) {
    this.setState({
      index: newIndex,
      redirect: true
    });
  }

  render() {
    const title = "frITid";

    const { paths, labels, index, redirect } = this.state;

    const components = [
      Activities,
      AboutUs,
      ChalmersChampionships
    ];

    return (
      <BrowserRouter>
        <div>
          <StyledRoot>
            <StyledAppBar>
              <StyledToolbar>
                <Typography variant="title" color="inherit" noWrap>
                  {title}
                </Typography>
                <Hidden xsDown >
                  <GammaTabs
                    selected={index}
                    tabs={labels}
                    centered={true}
                    fullWidth={true}
                    handleChange={this.handleIndexChange.bind(this)}
                  />
                </Hidden>
              </StyledToolbar>
              <Hidden smUp >
                <StyledToolbar>
                  <GammaTabs
                    selected={index}
                    tabs={labels}
                    centered={true}
                    fullWidth={true}
                    handleChange={this.handleIndexChange.bind(this)}
                  />
                </StyledToolbar>
              </Hidden>
            </StyledAppBar>
            <Hidden xsDown >
              <StyledMain>
                <Fill>
                  <GammaComponentSelector
                    components={components}
                    paths={paths}
                    index={index}
                    redirect={redirect}
                  />
                </Fill>
              </StyledMain>
            </Hidden>
            <Hidden smUp >
              <StyledMobileMain>
                <Fill>
                  <GammaComponentSelector
                    components={components}
                    paths={paths}
                    index={index}
                    redirect={redirect}
                  />
                </Fill>
              </StyledMobileMain>
            </Hidden>
          </StyledRoot>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
