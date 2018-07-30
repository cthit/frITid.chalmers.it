import React from "react";

import {
  Spacing,
  Center,
  MarginTop,
  Margin,
  TwoColGridWithFocusOnTheLeft
} from "../../common-ui/layout";

import { Text } from "../../common-ui/text";

import {
  GammaCard,
  GammaCardBody,
  GammaCardButtons,
  GammaCardTitle
} from "../../common-ui/design";

import { TopRight } from "./styles.js";

import GammaButton from "../../common/elements/gamma-button";

import MainActivities from "./views/main-activities";
import SuggestionForms from "./views/suggestion-forms";

const Activities = () => {
  return (
    <MainActivities />
  );
};

export default Activities;
