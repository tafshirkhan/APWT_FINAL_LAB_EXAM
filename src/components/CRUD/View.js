
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

const View = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    skill: "",
  });
  const { name, address, email, phone, skill } = user;

  useEffect(() => {
    loadUser();
  }, []);


const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/guide/show/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    
    setUser(result);
}
  return (

   <>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Demo
    </button>
    
 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <h1 className="mb-5">View user</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Name"
                readOnly
                
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="address"
                value={address}
                class="form-control"
                placeholder="EUser Name"
                readOnly
                
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                name="email"
                value={email}
                class="form-control"
                placeholder="Email"
                readOnly
                
              />
            </div>
            <div class="mb-3">
              <input
                type="number"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Mobile"
                readOnly
                
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="skill"
                value={skill}
                class="form-control"
                placeholder="Skill"
                readOnly
                
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default View;
