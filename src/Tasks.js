import React, { Component } from "react";
import { CenteredInput } from "./Home";
import styled from "styled-components";
import StyledButton from "./atoms/StyledButton";
import trashcan from "./img/trashcan.png";

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
  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>{rows}</table>
  );
};

export default class Tasks extends Component {
  state = {
    inputText: "",
    arrayWithTasks: []
  };

  handleButtonClick = () => {
    if (this.state.inputText !== "") {
      this.setState({
        arrayWithTasks: [...this.state.arrayWithTasks, this.state.inputText],
        inputText: ""
      });
    }
    console.log(this.state.arrayWithTasks);
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleButtonClick();
    }
  };

  handleTrashcanClick = event => {
    var list = this.state.arrayWithTasks.slice();
    var index = event.target.id;
    list.splice(index, 1);
    console.log(index);
    this.setState({ arrayWithTasks: list });
  };

  handleBlur = event => {
    if (event.target.value === "") {
      this.handleTrashcanClick(event);
    }
  };

  handleCorrect = event => {
    var array = this.state.arrayWithTasks.slice();
    array[event.target.id] = event.target.value;
    this.setState({ arrayWithTasks: array });
  };

  render() {
    return (
      <div>
        <StyledDiv>
          <CenteredInput
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

        <StyledDiv>
          <ListUnit
            arrayWithTasks={this.state.arrayWithTasks}
            handleCorrect={this.handleCorrect}
            handleTrashcanClick={this.handleTrashcanClick}
            handleBlur={this.handleBlur}
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

const StyledImg = styled.img`
  height: 29px;
  margin-left: 10px;
  vertical-align: middle;
  webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    background-color: #e7e7e7;
  }
`;
