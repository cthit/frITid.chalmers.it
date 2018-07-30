import React from "react";

import { Spacing, Center, MarginTop } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardSubTitle,
  GammaCardTitle
} from "../../../../common-ui/design";

import GammaButton from "../../../../common/elements/gamma-button";
import GammaTextField  from "../../../../common/elements/gamma-text-field";
import GammaIconButton from "../../../../common/elements/gamma-icon-button";

const Activities = ({moreInfoPressed}) => (
  <MarginTop>
    <div>
      <Center>
        <GammaCard maxWidth="700px"  >
          <GammaCardTitle text="Detta är en aktivitet" />
          <GammaCardBody>
            <Text text="Est qui sed earum. Ut aut eius excepturi ipsum. Fuga vero quia vero sequi ea. Et sequi quia dolorem maiores et officiis ut cum. Consectetur consectetur nemo sed iusto vel. Eos ipsum dicta deleniti enim in tenetur." />
          </GammaCardBody>
          <GammaCardButtons reverseDirection >
            <GammaButton text="Mer Info" onClick={moreInfoPressed} raised primary/>
          </GammaCardButtons>
        </GammaCard>
      </Center>
      <Spacing />
      <Spacing />
      <Spacing />
      <Spacing />
      <Center>
        <GammaCard maxWidth="700px"  >
          <GammaCardTitle text="Detta är en aktivitet" />
          <GammaCardBody>
            <Text text="Est qui sed earum. Ut aut eius excepturi ipsum. Fuga vero quia vero sequi ea. Et sequi quia dolorem maiores et officiis ut cum. Consectetur consectetur nemo sed iusto vel. Eos ipsum dicta deleniti enim in tenetur." />
          </GammaCardBody>
          <GammaCardButtons reverseDirection >
            <GammaButton text="Mer Info" raised primary/>
          </GammaCardButtons>
        </GammaCard>
      </Center>
      <Spacing />
      <Spacing />
      <Spacing />
      <Spacing />
      <Center>
        <GammaCard maxWidth="700px"  >
          <GammaCardTitle text="Detta är en aktivitet" />
          <GammaCardBody>
            <Text text="Est qui sed earum. Ut aut eius excepturi ipsum. Fuga vero quia vero sequi ea. Et sequi quia dolorem maiores et officiis ut cum. Consectetur consectetur nemo sed iusto vel. Eos ipsum dicta deleniti enim in tenetur." />
          </GammaCardBody>
          <GammaCardButtons reverseDirection >
            <GammaButton text="Mer Info" raised primary/>
          </GammaCardButtons>
        </GammaCard>
      </Center>
      <Spacing />
      <Spacing />
      <Spacing />
      <Spacing />
      <Center>
        <GammaCard maxWidth="700px"  >
          <GammaCardTitle text="Detta är en aktivitet" />
          <GammaCardBody>
            <Text text="Est qui sed earum. Ut aut eius excepturi ipsum. Fuga vero quia vero sequi ea. Et sequi quia dolorem maiores et officiis ut cum. Consectetur consectetur nemo sed iusto vel. Eos ipsum dicta deleniti enim in tenetur." />
          </GammaCardBody>
          <GammaCardButtons reverseDirection >
            <GammaButton text="Mer Info" raised primary/>
          </GammaCardButtons>
        </GammaCard>
      </Center>
      <Spacing />
      <Spacing />
      <Spacing />
      <Spacing />
      <Center>
        <GammaCard maxWidth="700px"  >
          <GammaCardTitle text="Detta är en aktivitet" />
          <GammaCardBody>
            <Text text="Est qui sed earum. Ut aut eius excepturi ipsum. Fuga vero quia vero sequi ea. Et sequi quia dolorem maiores et officiis ut cum. Consectetur consectetur nemo sed iusto vel. Eos ipsum dicta deleniti enim in tenetur." />
          </GammaCardBody>
          <GammaCardButtons reverseDirection >
            <GammaButton text="Mer Info" raised primary/>
          </GammaCardButtons>
        </GammaCard>
      </Center>
    </div>
  </MarginTop>
);

export default Activities;
