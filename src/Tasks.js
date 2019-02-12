import React, { Component } from "react";
import { CenteredInput } from "./Home";
import styled from "styled-components";
import StyledButton from "./atoms/StyledButton";

export default class Tasks extends Component {
  render() {
    return (
      <StyledDiv>
        <CenteredInput
          onClick={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter your options")}
          placeholder={"Enter your options"}
          style={{ display: "initial" }}
        />
        <StyledButton buttonText={"Add"} style={{ display: "initial" }} />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 800px;
  text-align: center;
`;
