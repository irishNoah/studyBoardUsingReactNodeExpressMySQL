import React, { Component } from "react";

function Customer(props) {
  return (
    <div>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />

      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </div>
  );
}

// Customer 정보 구조화기 1 - profile
function CustomerProfile(props) {
  return (
    <div>
      {/* alt는 시각장애인을 위한 속성 */}
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
}

// Customer 정보 구조화기 2 - Info
function CustomerInfo(props) {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
}

export default Customer;
