import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Redirect} from "react-router-dom"; 
import IfElseRendering from "../../../common/declaratives/if-else-rendering";
import { Fill } from "../../../common-ui/layout";

class GammaComponentSelector extends React.Component {
  render() {

    const { components, paths, index, redirect } = this.props;

    return (
      <Fill>
        <IfElseRendering
          test={redirect && paths[index] !== window.location.pathname}
          ifRender={ () => <Redirect to={paths[index]} /> }
        />
        <Switch>
         <Route path="/" exact component={components[0]} />
          {components.map( (component, index)  => (
            <Route key={paths[index]} path={paths[index]} component={component} />
          ))}

        </Switch>
      </Fill>
    );
  }
}

GammaComponentSelector.propTypes = {

};

export default GammaComponentSelector;
