import React from "react";
import { Hidden } from "@material-ui/core";

import Org from "./views/org";
import Members from "./views/members";

import { Spacing, MarginTop, Fill, TwoColGridWithBigGap } from "../../common-ui/layout";

const AboutUs = () => {
  return(
    <MarginTop>
      <Hidden xsDown >
        <TwoColGridWithBigGap>
          <Org />
          <Members />
        </TwoColGridWithBigGap>
      </Hidden>
      <Hidden smUp >
        <Org />
        <Spacing />
        <Members />
      </Hidden>
    </MarginTop>
  );
};

export default AboutUs;
