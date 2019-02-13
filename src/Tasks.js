import React, { Component } from "react";
import { CenteredInput } from "./Home";
import styled from "styled-components";
import StyledButton from "./atoms/StyledButton";
import trashcan from "./img/trashcan.png";
import arrow from "./img/arrow.png";
import { setTimeout } from "timers";

const Row = props => {
  return (
    <tr>
      <th>
        <CenteredInput
          id={props.i}
          style={{
            marginTop: "10px",
            display: "initial",
            border: "2px solid #C8CCD4"
          }}
          onBlur={props.handleBlur}
          onChange={props.handleCorrect}
          value={props.arrayWithTasks[props.i]}
        />
        <StyledImg
          id={props.i}
          onClick={props.handleTrashcanClick}
          src={trashcan}
          alt="trashcan"
        />
      </th>
    </tr>
  );
};

const ListUnit = props => {
  var rows = [];
  for (var i = 0; i < props.arrayWithTasks.length; i++) {
    rows.push(
      <tbody key={i}>
        <Row
          handleCorrect={props.handleCorrect}
          handleTrashcanClick={props.handleTrashcanClick}
          arrayWithTasks={props.arrayWithTasks}
          handleBlur={props.handleBlur}
          i={i}
        />
      </tbody>
    );
  }
  if (props.arrayWithTasks.length > 0) {
    rows.push(
      <tbody key={"arrow"}>
        <tr>
          <th>
            <StyledImg
              onClick={props.handleArrowClick}
              style={{ float: "right", marginTop: "10px" }}
              src={arrow}
              alt="arrow"
            />
          </th>
        </tr>
      </tbody>
    );
  }

  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>{rows}</table>
  );
};

export default class Tasks extends Component {
  state = {
    inputText: "",
    arrayWithTasks: [],
    toastAlreadyShown: false,
    styleOfToast: {
      opacity: "0"
    }
  };

  handleButtonClick = () => {
    if (this.state.inputText !== "") {
      var localArrayWithTasks = [
        ...this.state.arrayWithTasks,
        this.state.inputText
      ];
      this.setState({
        arrayWithTasks: localArrayWithTasks,
        inputText: ""
      });
      this.props.changeArrayWithTasks(localArrayWithTasks);
      if (this.state.toastAlreadyShown === false) {
        this.setState({
          toastAlreadyShown: true,
          styleOfToast: {
            opacity: "1"
          }
        });
        setTimeout(() => {
          this.setOpacityToZero();
        }, 4000);
        setTimeout(() => {
          this.setDisplayToNone();
        }, 5000);
      }
    }
  };

  handleArrowClick = () => {
    this.props.history.push("/decide");
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter" && this.state.inputText === "") {
      this.handleArrowClick();
    } else if (event.key === "Enter") {
      this.handleButtonClick();
    }
  };

  handleTrashcanClick = event => {
    var list = this.state.arrayWithTasks.slice();
    var index = event.target.id;
    list.splice(index, 1);
    this.setState({ arrayWithTasks: list });
    this.props.changeArrayWithTasks(list);
  };

  handleBlur = event => {
    if (event.target.value === "") {
      this.handleTrashcanClick(event);
    }
  };

  handleLabelClick = () => {
    this.setDisplayToNone();
  };

  setOpacityToZero() {
    this.setState({
      styleOfToast: {
        opacity: "0"
      }
    });
  }

  setDisplayToNone() {
    this.setState({
      styleOfToast: {
        display: "none"
      }
    });
  }

  handleCorrect = event => {
    var array = this.state.arrayWithTasks.slice();
    array[event.target.id] = event.target.value;
    this.setState({ arrayWithTasks: array });
    this.props.changeArrayWithTasks(array);
  };

  render() {
    return (
      <div>
        <StyledDiv>
          <CenteredInput
            autoFocus="true"
            onClick={e => (e.target.placeholder = "")}
            onBlur={e => {
              e.target.placeholder = "Enter your options";
            }}
            placeholder={"Enter your options"}
            style={{ display: "inline-block" }}
            onChange={this.handleChange}
            value={this.state.inputText}
            onKeyPress={this.handleKeyPress}
          />
          <StyledButton
            onClick={this.handleButtonClick}
            buttonText={"Add"}
            style={{ display: "inline-block", marginLeft: "10px" }}
          />
        </StyledDiv>

        <StyledDiv style={{ marginTop: "5px" }}>
          <div style={{ height: "52px" }}>
            <StyledLabel
              onClick={this.handleLabelClick}
              style={this.state.styleOfToast}
            >
              You can edit all your Entries
            </StyledLabel>
          </div>
          <ListUnit
            arrayWithTasks={this.state.arrayWithTasks}
            handleCorrect={this.handleCorrect}
            handleTrashcanClick={this.handleTrashcanClick}
            handleBlur={this.handleBlur}
            handleArrowClick={this.handleArrowClick}
          />
        </StyledDiv>
      </div>
    );
  }
}

const StyledDiv = styled.div`
    margin-top:5%
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const StyledImg = styled.img`
  height: 29px;
  margin-left: 10px;
  vertical-align: middle;
  webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    background-color: #e7e7e7;
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  line-height: 50px;

  z-index: -1;

  width: 352px;
  text-align: center;
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
