import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { Fill } from "../../../common-ui/layout";

const GammaTabs = ({ selected, tabs, centered, fullWidth, handleChange }) => (
  <Fill>
    <Tabs value={selected} centered={centered} fullWidth={fullWidth} onChange={handleChange}>
      {Object.keys(tabs).map(index => {
        return (
          <Tab key={tabs[index]} label={tabs[index]} />
        );
      })};
    </Tabs>
  </Fill>
);

GammaTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(String).isRequired,
  centered: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GammaTabs;
