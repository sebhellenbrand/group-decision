import React, { Component } from "react";
import styled from "styled-components";

export default class StyledButton extends Component {
  render() {
    return (
      <CenteredButton {...this.props}>{this.props.buttonText}</CenteredButton>
    );
  }
}

const CenteredButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  display: block;

  webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;

  padding: 15px 32px;
  text-align: center;
  :hover {
    background-color: #e7e7e7;
  }
`;
