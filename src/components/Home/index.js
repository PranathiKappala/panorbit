import React from "react";
import UserProfile from "../UserProfile";
import SideNav from "../SideNav";
import EmptyScreen from "../EmptyScreen";
import TopNav from "../TopNav";
import { Route, Redirect, Switch } from "react-router-dom";
import "./index.css";
import axios from "axios";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allusers: [], details: {}, id: null, show: false };
  }

  UNSAFE_componentWillMount() {
    if (this.props.location.state) {
      this.setState({
        details: this.props.location.state,
        allusers: this.props.location.state.users,
      });
    } else
      this.setState({ id: localStorage.getItem("id") }, () => this.getUser());
  }
  getUser = async () => {
    let { data } = await axios.get("https://panorbit.in/api/users.json");
    let newA = data.users;
    this.setState({ allusers: data.users });
    newA = newA.filter(item => item.id === parseInt(this.state.id));
    this.setState({ details: newA[0] });
  };
  handleSignout = () => {
    this.props.history.push({
      pathname: "/",
    });
  };
  open = () => {
    this.setState({ show: !this.state.show });
    if (this.state.show)
      document.getElementById("myForm").style.bottom = "-250px";
    else document.getElementById("myForm").style.bottom = "0px";
  };
  render() {
    return (
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <SideNav />
          <div className="col-9 col-lg-10" style={{ height: "100%" }}>
            <TopNav
              onSignout={this.handleSignout}
              profile={this.state.details}
              pathName={this.props.history.location.pathname}
            />
            <Switch>
              <Route
                path="/home/profile"
                render={() => <UserProfile details={this.state.details} />}
              />
              <Route path="/home/posts" component={EmptyScreen} />
              <Route path="/home/gallery" component={EmptyScreen} />
              <Route path="/home/todo" component={EmptyScreen} />
              <Redirect from="/home" to="/home/profile" />
            </Switch>
            <div className="open-button" id="myForm" onClick={this.open}>
              <i style={{ marginRight: 10 }} className="fa fa-comment"></i>Chats
              <div
                style={{ maxHeight: "95%", overflowY: "auto", marginTop: 10 }}
              >
                <form className="form-container">
                  {this.state.allusers.map(user => {
                    return (
                      <div key={user.id} className="d-flex chat-dp">
                        <img src={user.profilepicture} alt="profile" />
                        <p>{user.name}</p>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
