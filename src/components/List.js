import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ListItem from "./ListItem";
import { firebase } from "../firebase";

import "./List.css";

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = e => {
    this.setState({ formValue: e.target.value });
  };

  formSubmit = e => {
    const { formValue } = this.state;
    const { addToDo } = this.props;
    e.preventDefault();
    addToDo({ title: formValue });
    this.setState({ formValue: "" });
  };

  renderForm = () => {
    const { showForm, formValue } = this.state;
    if (showForm) {
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <span style={{ paddingRight: 5 }}>add</span>
              <input
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext"
                type="text"
              />
              <label style={{ paddingLeft: 5 }} htmlFor="toDoNext">
                What Next?
              </label>
            </div>
          </form>
        </div>
      );
    }
  };
  renderToDo() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }

  askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log("token do usuário:", token);

      return token;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div>
          <button
            className="button"
            onClick={() => this.setState({ showForm: !showForm })}
          >
            {showForm ? "Close" : "Add"}
          </button>
        </div>
        <br />
        <button
          className="button"
          onClick={() => this.askForPermissioToReceiveNotifications()}
        >
          Click here to receive notification
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  console.log(data);
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(List);
