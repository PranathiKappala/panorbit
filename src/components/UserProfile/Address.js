import React from "react";
import MapComponent from "./MapComponent";

const Address = props => {
  let { address } = props;
  const { lat, lng } = address.geo;
  return (
    <React.Fragment>
      <p>Address :</p>
      <p>
        Street : <strong>{address.street}</strong>
      </p>

      <p>
        Suite : <strong>{address.suite}</strong>
      </p>

      <p>
        City : <strong>{address.city}</strong>
      </p>

      <p>
        Zipcode : <strong> {address.zipcode}</strong>
      </p>

      {parseInt(lng) ? (
        <MapComponent
          center={{
            lat: parseInt(lat),
            lng: parseInt(lng),
          }}
        />
      ) : null}
      <div className="d-flex justify-content-end geo-ds">
        <p>
          Lat : <strong>{lat}</strong>
        </p>
        <p style={{ marginLeft: 15 }}>
          Lng : <strong>{lng}</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Address;
