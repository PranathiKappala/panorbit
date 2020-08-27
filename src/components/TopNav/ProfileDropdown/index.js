import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const ProfileDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const { profile } = props;
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="profile-dt">
        <img
          style={{ width: "40px", height: "35px" }}
          src={profile.profilepicture}
          alt="pp"
        />
        <strong style={{ marginLeft: 10 }}>{profile.name}</strong>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <img
            style={{ width: "100px", height: "100px" }}
            src={profile.profilepicture}
            alt="pp"
          />
        </DropdownItem>
        <DropdownItem>{profile.name}</DropdownItem>
        <DropdownItem>{profile.email}</DropdownItem>
        <DropdownItem divider />
        <div style={{ textAlign: "center" }}>
          <button
            className="signOut"
            style={{ cursor: "pointer" }}
            onClick={props.onSignout}
          >
            Sign Out
          </button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
