import React, { Component } from "react";
import styled from "styled-components";
import { StyledImg } from "./Tasks";
import arrow from "./img/arrow.png";

const ListUnit = props => {
  var rows = [];

  for (var i = 0; i < props.arrayWithTasks.length; i++) {
    var localStyle = { backgroundColor: "#5BBA53" };
    if (props.arrayWithDecisions[i]) {
      localStyle = { backgroundColor: "#2ed620" };
    }

    rows.push(
      <StyledLabel
        style={localStyle}
        onClick={props.handleLabelClick}
        id={i}
        key={i}
      >
        {props.arrayWithTasks[i]}
      </StyledLabel>
    );
  }

  rows.push(
    <StyledLabel onClick={props.handleDontCareClick} key={"care"}>
      I don't care
    </StyledLabel>
  );

  rows.push(
    <StyledImg
      onClick={props.handleArrowClick}
      key={"arrow"}
      style={{ float: "right", marginTop: "10px" }}
      src={arrow}
      alt="arrow"
    />
  );

  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <tbody>
        <tr>
          <th>{rows}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default class Decision extends Component {
  state = {
    currentPerson: 1,
    arrayWithTasks: [],
    arrayWithTasksAndCount: [],
    arrayWithDecisions: []
  };

  componentDidMount = () => {
    var localarrayWithTasksAndCount = [];
    var localArrayWithDecisions = [];

    for (var i = 0; i < this.props.arrayWithTasks.length; i++) {
      localarrayWithTasksAndCount.push([this.props.arrayWithTasks[i], 0]);
      localArrayWithDecisions.push(false);
    }
    this.setState({
      arrayWithTasks: this.props.arrayWithTasks,
      arrayWithTasksAndCount: localarrayWithTasksAndCount,
      arrayWithDecisions: localArrayWithDecisions
    });
  };

  handleLabelClick = event => {
    let decision = this.state.arrayWithDecisions;
    decision[event.target.id] = !decision[event.target.id];
    this.setState({ arrayWithDecisions: decision });
  };

  handleArrowClick = () => {
    if (this.state.currentPerson < this.props.numberOfParticipants) {
      for (var i = 0; i < this.props.arrayWithTasks.length; i++) {
        if (this.state.arrayWithDecisions[i]) {
          let localarrayWithTasksAndCount = this.state.arrayWithTasksAndCount;
          localarrayWithTasksAndCount[i][1] =
            localarrayWithTasksAndCount[i][1] + 1;
          this.setState({
            arrayWithTasksAndCount: localarrayWithTasksAndCount
          });
        }
      }
      this.nextPerson();
      console.log(this.state.arrayWithTasksAndCount);
    }
  };

  handleDontCareClick = () => {
    this.setDecisionsToTrue();
    this.handleArrowClick();
    this.nextPerson();
  };

  nextPerson = () => {
    if (this.state.currentPerson < this.props.numberOfParticipants) {
      let decision = this.state.arrayWithDecisions;

      for (var i = 0; i < this.props.arrayWithTasks.length; i++) {
        decision[i] = false;
      }

      this.setState({
        arrayWithDecisions: decision,
        currentPerson: this.state.currentPerson + 1
      });
    } else {
      this.props.changeTasksWithCountArray(this.state.arrayWithTasksAndCount);
      this.props.history.push("/result");
    }
  };

  setDecisionsToTrue() {
    let decision = this.state.arrayWithDecisions;
    for (var i = 0; i < this.props.arrayWithTasks.length; i++) {
      decision[i] = true;
    }
    this.setState({ arrayWithDecisions: decision });
  }

  render() {
    return (
      <StyledDiv>
        <div>Person {this.state.currentPerson} choosing:</div>
        <ListUnit
          handleLabelClick={this.handleLabelClick}
          arrayWithTasks={this.state.arrayWithTasks}
          handleArrowClick={this.handleArrowClick}
          arrayWithDecisions={this.state.arrayWithDecisions}
          handleDontCareClick={this.handleDontCareClick}
        />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
    margin-top:5%
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const StyledLabel = styled.label`
  line-height: 50px;

  z-index: -1;

  width: 352px;
  text-align: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition-duration: 0.8s;

  border: 0
    font-family: inherit
    height: 48px
    font-size: 16px
    font-weight: 500
    border: 2px solid #C8CCD4
    background: none
    border-radius: 0
    background-color: #5BBA53

    :hover {
    cursor: pointer;
    transition-duration: 0s;

    background-color: #2ed620;
  }
`;
