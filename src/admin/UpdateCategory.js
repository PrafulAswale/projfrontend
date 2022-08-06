import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { updateCategory, getCategory } from "./helper/adminapicall";

const UpdateCategory = () => {
  const [name, setName] = useState({ name: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { catName } = name;
  const { user, token } = isAutheticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (name) => (event) => {
    setError("");
    setName({ name: event.target.value });
  };

  const onSubmit = (categoryId) => {
    // backend request fired
    updateCategory(categoryId, user._id, token, catName).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName({ name: catName });
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category Update Successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed to Update Category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange()}
          value={catName}
          autoFocus
          required
          placeholder="for Ex. Summer"
        />
        <button onClick={onSubmit()} className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
  );
  return (
    <Base
      title="Update a category here"
      description="Update category for new tshirt"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {warningMessage()}
          {successMessage()}
          {myCategoryForm()} {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
