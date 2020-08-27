import React from "react";

import "./index.css";
import ProfileDropdown from "./ProfileDropdown";

const TopNav = props => {
  let { profile } = props;
  let heading = props.pathName.slice(6);
  return (
    <div className="header">
      <nav className="navbar navbar-light">
        <p>{heading}</p>
        <ProfileDropdown profile={profile} onSignout={props.onSignout} />
      </nav>
    </div>
  );
};

export default TopNav;
