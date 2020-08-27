import React from "react";
import Company from "./Company";
import Address from "./Address";
// import ChatWindow from "./ChatWindow";
import "./index.css";

const UserProfile = props => {
  let { details } = props;
  return (
    <div className="container-fluid" style={{ height: "90%" }}>
      <div className="row">
        <div className="col-6">
          <div className="profilepic">
            <img src={details.profilepicture} alt="profilepic" />
          </div>
          <form className="profile-dt">
            <p>{details.name}</p>
            <p>
              Username : <strong>{details.username}</strong>
            </p>
            <p>
              Email : <strong>{details.email}</strong>
            </p>
            <p>
              Phone : <strong> {details.phone}</strong>
            </p>
            <p>
              Website : <strong>{details.website}</strong>
            </p>

            <div className="dropdown-divider"></div>
            {details.company ? <Company company={details.company} /> : null}
          </form>
        </div>
        <div
          style={{ borderLeft: "1px solid #ced4da" }}
          className="col-6 profile-dt"
        >
          {details.address ? <Address address={details.address} /> : null}
        </div>

        {/* <ChatWindow /> */}
      </div>
    </div>
  );
};

export default UserProfile;
