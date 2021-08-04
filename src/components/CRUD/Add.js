import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    skill: "",
  });
  const {name,address,email,phone,skill} = user;
  const onInputChange = (e) => {
     setUser({...user,[e.target.name]:e.target.value})
  }
  const onSubmit = async (e)=>{
      e.preventDefault();
      await axios.post("http://127.0.0.1:8000/api/guide",user);
      history.push('/employees/list');
  }
  return (
    <div class="container">
      <h1 className="mb-5">Add user</h1>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <form onSubmit={(e)=>onSubmit(e)}>
            <div class="mb-4">
              
              <input
                type="text"
                title="Name"
                name="name"
                value={name}
                class="form-control"
                placeholder="Name"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                title="Address"
                name="address"
                value={address}
                class="form-control"
                placeholder="Address"
                
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                title="Email"
                name="email"
                value={email}
                class="form-control"
                placeholder="Email"
                
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="number"
                title="Mobile"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Mobile"
                
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                title="Skill"
                name="skill"
                value={skill}
                class="form-control"
                placeholder="Skill"
              
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
