import React from "react";
import styled from "styled-components";
import { IconButton, AppBar, Toolbar, Drawer } from "@material-ui/core";

export const StyledRoot = styled.div``;

export const StyledAppBar = styled(AppBar)`
  position: "absolute";
`;

export const StyledToolbar = styled(Toolbar)`
  padding-left: 16px;
`;

export const StyledMain = styled.main`
  height: calc(100vh - 64px);
  margin-top: 64px;
`;
