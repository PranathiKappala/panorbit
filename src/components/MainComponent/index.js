import React, { Component } from "react";
import axios from "axios";
import "./index.css";
class MainComponent extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    try {
      let { data } = await axios.get("https://panorbit.in/api/users.json");
      console.log("data-----", data);
      this.setState({ users: data.users });
    } catch (e) {
      console.log("error", e);
    }
  };
  viewUser = user => {
    localStorage.setItem("id", user.id);
    this.props.history.push({
      pathname: "/home/profile",
      state: { ...user, users: [...this.state.users] },
    });
  };
  render() {
    console.log(this.state.users);
    return (
      <div className="landing-pg" style={{ padding: 50 }}>
        <div className="card">
          <div className="card-title">
            <h5>Select an account</h5>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {this.state.users.map((user, index) => (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={() => this.viewUser(user)}
                >
                  <div className="d-flex justify-content-start align-items-center">
                    <img
                      style={{ width: 40, height: 35 }}
                      src={user.profilepicture}
                      alt="profile"
                    />
                    <span style={{ marginLeft: 10 }}>{user.name}</span>{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
