import React from "react";

import { Spacing, Center, MarginTop, Margin } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle
} from "../../../../common-ui/design";

import GammaButton from "../../../../common/elements/gamma-button";

const SuggestionForms = () => {
  return (
    <div>
      <MarginTop>
          <Center>
            <GammaCard absHeight="600px" >
              <GammaCardTitle text="Förlsagslåda" />
              <GammaCardBody>
                <Text text="Har du förslag på saker vi hade kunnat arrangera?" />
              </GammaCardBody>
              <GammaCardButtons reverseDirection >
                <GammaButton
                  text="Till formulär"
                  primary
                  raised
                />
              </GammaCardButtons>
            </GammaCard>
          </Center>
      </MarginTop>
    </div>
  );
};

export default SuggestionForms;
