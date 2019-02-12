import React, { Component } from 'react';
import styled from 'styled-components';

export default class Home extends Component {

    state = {
        numberOfParticipants:"",
        hoveredStyle : {
            background:'white',
        }
        
    }

    handleChange = (event) =>{
        if(event.target.value>=0){
        this.setState({numberOfParticipants:event.target.value})
        }
    }

    handleButtonClick = () =>{
        this.props.history.push("/tasks")
    }

    isHovered = () =>{
        this.setState({hoveredStyle:{background:'#e7e7e7'}})
    }

    isNotHovered = () => {
        this.setState({hoveredStyle:{background:'white'}})
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleButtonClick();
          }
    }

  render() {
    return (
            <StyledDiv>
                <CenteredInput onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="number" placeholder="Number of participants" value={this.state.numberOfParticipants}/>
                <CenteredButton style={this.state.hoveredStyle} onMouseLeave={this.isNotHovered} onMouseEnter={this.isHovered} onClick={this.handleButtonClick}>Get Started!</CenteredButton>
            </StyledDiv>
        );
  }

}

const StyledDiv = styled.div`
    margin-top:20%;
`;

const CenteredInput = styled.input`
    width:250px;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    display:block;
    border:solid

    border: 0
    font-family: inherit
    padding: 0px 0
    height: 48px
    font-size: 16px
    font-weight: 500
    border-bottom: 2px solid #C8CCD4
    background: none
    border-radius: 0
    color: #223254
`;

const CenteredButton = styled.button`
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    display:block;

    hover:

    webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;

    padding: 15px 32px;
    text-align: center;

`;

