import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';


class ListItem extends Component {
  handleComplete = todoId => {    
    this.props.completeToDo(todoId);
  };
  render() {
    const { todoId, todo } = this.props;
    return (
      <div key="toDoName">
        <h4>
          {todo.title}
          <span onClick={() => this.handleComplete(todoId)}>
            <i>Done</i>
          </span>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {  
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(ListItem);
