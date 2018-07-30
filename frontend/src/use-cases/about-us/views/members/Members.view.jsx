import React from "react";

import { Spacing, Center, MarginTop, Margin } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import fritid from "./members.json";

import { TwoColGridWithSmallGap } from "../../../../common-ui/layout";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle,
  GammaCardHeaderImage,
  GammaCardSubTitle
} from "../../../../common-ui/design";


class Members extends React.Component {
  render() {
    const members = fritid.members;
    return(
      <div>
        <Center>
          <TwoColGridWithSmallGap>
            {fritid.members.map(member => {
              return (
                <div key={member.position}>
                  <GammaCard hasSubTitle >
                    <GammaCardTitle text={member.name} />
                    <GammaCardSubTitle text={member.position} />
                    <GammaCardHeaderImage src={member.pathToImage} />
                    <GammaCardBody>
                      <Text text={member.description} />
                    </GammaCardBody>
                  </GammaCard>
                </div>
              );
            })}
          </TwoColGridWithSmallGap>
        </Center>
      </div>
    );
  }
}
            
export default Members;
