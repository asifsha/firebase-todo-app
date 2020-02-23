import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  handleComplete = todoId => {
    this.props.completeToDo(todoId);
  };
  render() {
    const { todoId, todo } = this.props;
    return (
      <div key="toDoName" style={{padding : 5}}>
        <button
          className="button-small"
          onClick={() => this.handleComplete(todoId)}
        >
          Done
        </button>
        <span style={{paddingLeft : 5}}>{todo.title}</span>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
