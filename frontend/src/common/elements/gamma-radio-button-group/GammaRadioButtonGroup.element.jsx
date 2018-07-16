import React from "react";
import PropTypes from "prop-types";
import { Radio, FormControlLabel, RadioGroup } from "@material-ui/core";

import {
  UpperLabel,
  StyledFormControl
} from "./GammaRadioButtonGroup.element.styles";

import GammaLowerLabel from "../gamma-lower-label";

const GammaRadioButtonGroup = ({
  value,
  onChange,
  onBlur,
  name,
  upperLabel,
  lowerLabel,
  label,
  radioButtonMap
}) => (
  <StyledFormControl component="fieldset">
    <UpperLabel component="legend">{upperLabel}</UpperLabel>
    <RadioGroup value={value} name={name} onBlur={onBlur} onChange={onChange}>
      {Object.keys(radioButtonMap)
        .reverse()
        .map(value => {
          const { label, disabled, primary, secondary } = radioButtonMap[value];
          return (
            <FormControlLabel
              key={value}
              value={value}
              label={label}
              disabled={disabled}
              control={
                <Radio
                  color={
                    primary ? "primary" : secondary ? "secondary" : "default"
                  }
                />
              }
            />
          );
        })}
    </RadioGroup>
    <GammaLowerLabel text={lowerLabel} />
  </StyledFormControl>
);

GammaRadioButtonGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  upperLabel: PropTypes.string,
  lowerLabel: PropTypes.string,
  label: PropTypes.string,
  radioButtonMap: PropTypes.object.isRequired
};

export default GammaRadioButtonGroup;
