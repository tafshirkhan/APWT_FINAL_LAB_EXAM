import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Head/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/CRUD/Add";
import Edit from "./components/CRUD/Edit";
import View from "./components/CRUD/View";
import Login from "./components/AdminRegister/Login";

import EmployeeList from "./components/CRUD/Employeelist";
import Register from "./components/AdminRegister/Register";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Switch>
        
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
       
        <Route exact path="/guide/add" component={Add}/>
        <Route exact path="/user/edit/:id" component={Edit}/>
        <Route exact path="/user/:id" component={View}/>
        <Route exact path="/employees/list" component={EmployeeList}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
