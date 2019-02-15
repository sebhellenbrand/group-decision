import React, { Component } from "react";
import styled from "styled-components";
import { StyledImg } from "./Tasks";
import refresh from "./img/refresh.png";

const ListUnit = props => {
  var rows = [];

  for (var i = 0; i < props.tasksWithCountArray.length; i++) {
    rows.push(
      <div>
        <StyledLabel>{props.tasksWithCountArray[i][0]}</StyledLabel>
        <StyledLabel
          style={{
            width: "50px",
            marginLeft: "10px",
            backgroundColor: "#00CED1",
            borderRadius: "50px 50px 50px 50px"
          }}
        >
          {props.tasksWithCountArray[i][1]}
        </StyledLabel>
      </div>
    );
  }

  rows.push(
    <StyledImg
      onClick={props.handleRefreshClick}
      style={{ float: "right", marginTop: "15px", marginRight: "12px" }}
      src={refresh}
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
export default class Result extends Component {
  state = {
    tasksWithCountArray: []
  };

  componentDidMount = () => {
    this.setState({ tasksWithCountArray: this.props.tasksWithCountArray });

    let array = this.props.tasksWithCountArray;

    for (let i = 0; i < array.length; i++) {
      let highest = array[i];
      for (let k = i + 1; k < array.length; k++) {
        if (highest[1] < array[k][1]) {
          let helper = array[k];
          array[k] = highest;
          highest = helper;
          console.log(highest);
        }
      }
      array[i] = highest;
    }
    this.setState({ tasksWithCountArray: array });
  };

  handleRefreshClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <StyledDiv>
        <div>Votes:</div>
        <ListUnit
          handleRefreshClick={this.handleRefreshClick}
          tasksWithCountArray={this.state.tasksWithCountArray}
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
margin-top:10px;
  width: 352px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;

  border: 0
    font-family: inherit
    height: 48px
    font-size: 16px
    font-weight: 500
    border: 2px solid #C8CCD4
    background: none
    border-radius: 0
`;
