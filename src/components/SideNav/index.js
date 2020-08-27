import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const SideNav = () => {
  return (
    <div style={{ height: "100%" }} className="col-2 sidenav card">
      <div
        className="sidenavPill nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink className="nav-link" to="/home/profile">
          <span>Profile</span>
        </NavLink>
        <NavLink className="nav-link" id="v-pills-process-tab" to="/home/posts">
          <span>Posts</span>
        </NavLink>
        <NavLink
          className="nav-link"
          id="v-pills-settings-tab"
          to="/home/gallery"
        >
          <span>Gallery</span>
        </NavLink>
        <NavLink className="nav-link" id="v-pills-settings-tab" to="/home/todo">
          <span>ToDo</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
