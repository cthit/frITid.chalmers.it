import React from "react";

import { Spacing, Center, MarginTop, Margin } from "../../common-ui/layout";
import { Text } from "../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardHeader,
  GammaCardTitle,
  GammaCardSubTitle,
  GammaCardHeaderImage
} from "../../common-ui/design";

import GammaButton from "../../common/elements/gamma-button";

import Championships from "./championships.json";

const ChalmersChampionships = () => {
  return (
    <div>
      <MarginTop>
          <Center>
                {Championships.map((championship, index, array) => {
                  return (
                    <Margin key={championship.name} >
                      <GammaCard maxWidth="600px" hasSubTitle >
                        <GammaCardHeader hasSubTitle >
                          <GammaCardTitle text={championship.name} />
                          <GammaCardSubTitle text={championship.date} />
                          <GammaCardHeaderImage src={championship.image} />
                        </GammaCardHeader>
                        <GammaCardBody>
                          <Text text={championship.description} />
                        </GammaCardBody>
                        <GammaCardButtons reverseDirection >
                          <GammaButton
                            text="Anmälan"
                            onClick={()=>
                              console.log("Anmälan clicked")
                            }
                            primary
                            raised
                          />
                          <Spacing />
                          <GammaButton
                            text="Mer info"
                            onClick={()=>
                              console.log("Mer info clicked")
                            }
                            raised
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

export default ChalmersChampionships;
