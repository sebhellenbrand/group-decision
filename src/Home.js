import React, { Component } from "react";
import styled from "styled-components";
import StyledButton from "./atoms/StyledButton";

class Home extends Component {
  state = {
    numberOfParticipants: ""
  };

  handleChange = event => {
    if (event.target.value >= 0) {
      this.setState({ numberOfParticipants: event.target.value });
    }
  };

  handleButtonClick = () => {
    this.props.changeNumberOfParticipants(this.state.numberOfParticipants);
    if(this.state.numberOfParticipants > 0) {
      this.props.history.push("/tasks");
    }
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleButtonClick(event);
    }
  };

  render() {
    return (
      <StyledDiv>
        <CenteredInput
          autoFocus="true"
          onClick={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Number of participants")}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          type="number"
          placeholder="Number of participants"
          value={this.state.numberOfParticipants}
        />
        <StyledButton
          onClick={this.handleButtonClick}
          buttonText="Get Started!"
        />
      </StyledDiv>
    );
  }
}

export default Home;

const StyledDiv = styled.div`
  margin-top: 20%;
`;

export const CenteredInput = styled.input`
    width:250px;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    display:block;
    border:solid;
    webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    outline: none;

    border: 0;
    font-family: inherit;
    padding: 0px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #C8CCD4;
    background: none;
    border-radius: 0;
    color: #223254;
`;
