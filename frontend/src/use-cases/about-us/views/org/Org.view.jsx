import React from "react";

import EmailIcon from "@material-ui/icons/Email";

import { Spacing, Center, MarginTop, Margin } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import fritid from "./members.json";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle,
  GammaCardHeaderImage,
  GammaCardHeader,
  GammaCardSubTitle
} from "../../../../common-ui/design";

import GammaIconButton from "../../../../common/elements/gamma-icon-button";

class Org extends React.Component {
  render() {
    return(
      <div>
        <Center>
          <GammaCard>
            <GammaCardHeader hasSubTitle >
              <GammaCardTitle text="frITid" />
              <GammaCardSubTitle text="Idrott- och Fritidsförening" />
              <GammaCardHeaderImage src={fritid.image} />
            </GammaCardHeader>
            <GammaCardBody>
              <Text text={"frITid är IT-sektionens idrotts- och fritidsförening!"} />
              <Text text={"Det är vi som ser till att alla smurfar, som vill, har möjligheten att lämna datorn för en stund och få sig lite välbehövd motion och eventuellt frisk luft. Vi träffas varje fredag klockan 15:30-17:30 för att träna tillsammans i kårhusets motionshall eller utomhus på Mossens IP. Vi arrangerar diverse aktiviteter där fredagarna exempelvis kan bestå av volleyboll, badminton, frisbee, fotboll eller annat. Efteråt blir det bastu- och poolhäng för de som vill, så glöm inte badkläder."} />
              <Text text={"Vi arrangerar även större arrangemang utanför Chalmersområdet, som en tur till Bounce, skidresor, eller varför inte en minigolfrunda. Ibland träffas vi även i mindre konditionskrävande förhållanden för att agera hejarklack inför en match, live som framför tv, och låter ”proffsen” sköta jobbet."} />
              <Text text={"Vi ansvarar också för anmälan och uttagning när det vankas CM (Chalmersmästerskap). Information angående dessa publiceras under årets gång här på chalmers.it, i slackkanalen news, samt på vår hemsida fritid.chalmers.it."} />
              <Text text={"Har ni fler funderingar eller någon kul idé på aktivitet relaterade till frITid så tveka inte på att höra av er! Ni kan alltid nå oss via mail på fritid@chalmers.it , men vi finns också ofta tillgängliga i Hubben så det är bara att grabba tag i någon av oss."} />
            </GammaCardBody>
            <GammaCardButtons reverseDirection >
              <GammaIconButton
                primary
                onClick={ () => {
                  console.log("hej")
                }}
                component={EmailIcon}
              />
            </GammaCardButtons>
          </GammaCard>
        </Center>
      </div>
    );
  }
}
            
export default Org;
