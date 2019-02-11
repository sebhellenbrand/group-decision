import React, { Component } from 'react';
import styled from 'styled-components';

export default class Home extends Component {

    state = {
        numberOfParticipants:""
    }

    handleChange = (event) =>{
        this.setState({numberOfParticipants:event.target.value})
    }

    handleButtonClick = () =>{
        this.props.history.push("/tasks")
    }

  render() {
    return (
            <StyledDiv>
                <CenteredInput onChange={this.handleChange} type="number" placeholder="Number of participants" value={this.state.numberOfParticipants}/>
                <CenteredButton onClick={this.handleButtonClick} style={{clear:"both"}}>Get Started!</CenteredButton>
            </StyledDiv>
        );
  }

}

const StyledDiv = styled.div`
    margin-top:20%;
`;

const CenteredInput = styled.input`
    width:200px;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    display:block;
`;

const CenteredButton = styled.button`
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    display:block;
`;

