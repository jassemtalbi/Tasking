import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Axios from "axios";
import Navbar from './navbar'
import Footer from './footer'

function Login() {
 
  const router = useRouter()

  const [emaill, setEmail] = useState("");
  const [passwordl, setPassword] = useState("");
  const login = (e) => {
    Axios.post("http://localhost:5000/users/login/", {
      email: emaill,
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
      <>
      <Navbar></Navbar>
      <html>
      <head>
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
      crossorigin="anonymous"
    />
      </head>
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
    <a href="/register">
    <div class="card-body">
    
      <i class="fa fa-registered" href="/register"></i>
      <h6 class="card-title">Register</h6>
      <p class="card-title">Browse and find what you need</p>

    </div>
    </a>
  </div>
  <div class="card">
  <a href="/login">

    <div class="card-body">
      <i class="fas fa-sign-in-alt"></i>
      <h6 class="card-title">Login</h6>
      <p class="card-title">already have an account, then welcom back</p>


    </div>
    </a>
  </div>
</div>
    <div class="fadeIn first">
    </div>
                      <br></br>

    <input type="email" class="form-control"  onChange={(e) => {
                        setEmail(e.target.value);
                      }} placeholder="Email*" id="email"/>  
     <input type="password" class="form-control" onChange={(e) => {
                        setPassword(e.target.value);
                      }} placeholder="Password*" id="password"/>
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
</html>
<Footer></Footer>
</>
    )
  }
  
  export default Login;
  
