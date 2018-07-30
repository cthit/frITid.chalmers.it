import React from "react";

import { Spacing, Center, MarginTop } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle
} from "../../../../common-ui/design";


const ContactInformation = ({}) => (
  <MarginTop>
    <GammaCard absWidth="300px" >
      <GammaCardTitle text="Email" />
      <GammaCardBody>
        <Text text="fritid@chalmers.it" />
      </GammaCardBody>
    </GammaCard>
  </MarginTop>
);

export default ContactInformation;
