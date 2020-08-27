import React from "react";

const Company = props => {
  return (
    <React.Fragment>
      <p>Company</p>
      <p>
        Name : <strong>{props.company.name}</strong>
      </p>
      <p>
        catchphrases: <strong> {props.company.catchPhrase}</strong>
      </p>
      <p>
        bs : <strong> {props.company.bs}</strong>
      </p>
    </React.Fragment>
  );
};

export default Company;
