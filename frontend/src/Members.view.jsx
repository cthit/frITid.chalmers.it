
import React from "react";

import { Spacing, Center, MarginTop, Margin } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import fritid from "./members.json";

import { TwoColGrid } from "./styles.js";

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
        <MarginTop>
        <Center>
          <TwoColGrid>
            {fritid.members.map(member => {
              return (
                <Margin>
                  <GammaCard absWidth="400px" hasSubTitle >
                    <GammaCardTitle text={member.name} />
                    <GammaCardSubTitle text={member.position} />
                    <Margin>
                      <GammaCardHeaderImage src={member.pathToImage} />
                    </Margin>
                    <GammaCardBody>
                      <Text text={member.description} />
                    </GammaCardBody>
                  </GammaCard>
                </Margin>
              );
            })}
          </TwoColGrid>
        </Center>
        </MarginTop>
      </div>
    );
  }
}
            
export default OrgAndMembers;
