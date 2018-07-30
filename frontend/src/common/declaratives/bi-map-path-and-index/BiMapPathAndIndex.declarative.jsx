import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { Fill } from "../../../common-ui/layout";

class BiMapPathAndIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.pathAndIndexMap[props.maybeNewPath],
      currentPath: props.maybeNewPath,
      handleChange: this.handleChange(),
      redirect: false
    };
  }

  render() {
    const { maybeNewPath, maybeNewIndex, pathAndIndexMap, render } = this.props;
    const { currentIndex, currentPath, handleChange, redirect} = this.state;
    console.log("Maybe new path: " + maybeNewPath +
      "\ncurrentIndex: " + currentIndex);
    //if (redirect) {
      //this.setState({redirect: false});
      //return <Redirect to={currentPath} />;
    //}

    return (<Fill>{render(this.getIndex(pathAndIndexMap, currentIndex, currentPath), 
      this.handleChange.bind(this))}</Fill>);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  getIndex(pathAndIndexMap, currentIndex, currentPath) {
    return (
      pathAndIndexMap.hasOwnProperty(currentPath) ? currentIndex : 0
    );
  }
   
  handleChange(event, maybeNewIndex) {
    if (this.currentIndex != maybeNewIndex) {
      this.setState({
        currentIndex: maybeNewIndex,
        currentPath: Object.keys(this.props.pathAndIndexMap)[maybeNewIndex],
        redirect: true
      });
    }
  }
}

BiMapPathAndIndex.propTypes = {
  maybeNewPath: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default BiMapPathAndIndex;
