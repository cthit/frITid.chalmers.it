import React from "react";

import { Spacing, Center, MarginTop, Margin } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle,
  GammaCardHeaderImage,
  GammaCardHeader,
  GammaCardSubTitle
} from "../../../../common-ui/design";

import GammaButton from "../../../../common/elements/gamma-button";

import Activities from "./activities.json";

class MainActivities extends React.Component {
  
  takeMeTo(url) {
    console.log("Plz take me to " + url);
  }
  render() {
    return (
      <div>
        <MarginTop>
            <Center>
              {Activities.map(activity => {
                return (
                  <Margin key={activity.name} >
                    <GammaCard maxWidth="600px" >
                      <GammaCardHeader hasSubTitle >
                        <GammaCardTitle text={activity.name} />
                        <GammaCardSubTitle text={activity.date} />
                        <GammaCardHeaderImage src={activity.image} />
                      </GammaCardHeader>
                      <GammaCardBody>
                        <Text text={activity.description} />
                      </GammaCardBody>
                      <GammaCardButtons reverseDirection >
                        <GammaButton
                          text="Mer Info"
                          onClick={activity.handleOnClick}
                          raised
                          primary
                        />
                      </GammaCardButtons>
                    </GammaCard>
                  </Margin>
                );
              })}
            </Center>
        </MarginTop>
      </div>
    );
  }
}

export default MainActivities;
