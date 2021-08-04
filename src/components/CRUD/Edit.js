import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    skill: "",
  });
  const { name, address, email, phone, skill } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/guide/update/${id}?_method=PUT`, user);
    history.push("/employees/list");
  };

  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/guide/show/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    // console.log(result);
    setUser(result);
}
  return (
    <div class="container">
      <h1 className="mb-4">Edit user</h1>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form onSubmit={(e) => onSubmit(e)}>
            <div class="mb-4">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                name="address"
                value={address}
                class="form-control"
                placeholder="Address"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                class="form-control"
                placeholder="Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="number"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Mobile"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                name="skill"
                value={skill}
                class="form-control"
                placeholder="Skill"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn">
              Edit Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
