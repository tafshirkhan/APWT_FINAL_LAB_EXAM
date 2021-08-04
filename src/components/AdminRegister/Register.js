import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";


const Register = () => {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [contact, setContact] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
  
    async function signUp()
    {
        let items = {name,companyName,contact,userName,email,password};
        console.log(items);
        let result = await fetch("http://127.0.0.1:8000/api/registration",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(items)
        });
        result = await result.json();
        localStorage.setItem("tourist-info",JSON.stringify(result));
        history.push("/home");
    }
  return (
    <>
    
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Sign-Up</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form>
            <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Control type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Company Name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Control type="number" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="Contact" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicUName">
                <Form.Control type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="User Name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Button variant="primary"  onClick={signUp}>
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;