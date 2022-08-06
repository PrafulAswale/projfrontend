import React from "react";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2"> Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2"> Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge bg-danger"> User Area</span>
            {role}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="welcome to UserDashBoard"
      description="Manage all of products here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
