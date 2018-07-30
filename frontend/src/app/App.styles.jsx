import styled from "styled-components";
import { AppBar, Toolbar, Tabs } from "@material-ui/core";

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
  display: flex;
`;

export const StyledMobileMain = styled.main`
  height: calc(100vh - 128px);
  margin-top: 128px;
  display: flex;
`;

export const StyledFooter = styled.div`
  display: relative;
  height : 64px;
  width: 100%;
`;  

