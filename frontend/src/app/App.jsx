import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { List, Typography, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Demo from "../use-cases/demo";

import {
  StyledRoot,
  StyledAppBar,
  StyledMain,
  StyledToolbar
} from "./App.styles";

import { Padding, Spacing } from "../common-ui/layout";

export class App extends Component {
  render() {
    const title = "frITid";

    return (
      <BrowserRouter>
        <div>
          <StyledRoot>
            <StyledAppBar>
              <StyledToolbar>
                <Typography variant="title" color="inherit" noWrap>
                  {title}
                </Typography>
              </StyledToolbar>
            </StyledAppBar>
            <StyledMain>
              <Padding>
                <Switch>
                  <Route path="/demo" component={Demo} />
                </Switch>
              </Padding>
            </StyledMain>
          </StyledRoot>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
