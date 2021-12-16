import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Axios from "axios";

function First() {
 
  const router = useRouter()

  const [usernamel, setUsername] = useState("");
  const [passwordl, setPassword] = useState("");
  const login = (e) => {
    Axios.post("http://localhost:5000/users/login/", {
      username: usernamel,
      password: passwordl,
    }).then((response) => {
      localStorage.setItem("Data", response.data.data);
      var getlocal = localStorage.getItem("Data");

      if (getlocal !== "undefined") {
        console.log("t3ada");
router.push('/home')
      } else {
        console.log("mat3adash");
        alert("sorry account does not exist");
      }

    });
  };
  
  
  useEffect(() => {
   
  }, []);

    return (
        <body style={{ 
          backgroundColor: `#F2F2F2` }}>

<div class="wrapper fadeInDown">
  <div id="formContent">
    
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Register</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Login</p>
    </div>
  </div>
</div>
    <div class="fadeIn first">
    </div>
                      <br></br>

    <input type="text" class="form-control"  onChange={(e) => {
                        setUsername(e.target.value);
                      }} placeholder="your username" id="username"/>  
     <input type="password" class="form-control" onChange={(e) => {
                        setPassword(e.target.value);
                      }} placeholder="Your Password" id="password"/>
      <br></br>
      <br></br>

      <input type="submit" class="fadeIn fourth" value="Submit" onClick={login} />

    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </div>
</div>
</body>

    )
  }
  
  export default First;
  
