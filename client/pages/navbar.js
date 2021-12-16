import img from "../public/logo.PNG"
import Image from 'next/image'

function Navbar() {
 
  const logout=()=>{
    if (typeof window !== 'undefined') {
    localStorage.removeItem('Data');}
 }
  if (typeof window !== 'undefined') {
  var local = localStorage.getItem("Data");}
  if (local !== "undefined" && local !== null) {
    console.log("done");
  } else {
    console.log("mat3adash");
  } 
 
  if (local !== "undefined" && local !== null) {

    return (
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between" >
<a class="navbar-brand"></a>
<form class="form-inline">
<a href="/login" onClick={logout}>logout</a>

</form>
</nav>
<nav class="navbar navbar-expand-lg navbar-dark " style={{ 
          backgroundColor: ` #222222` }}>

  <a class="navbar-brand" href="#">    <Image src={img} width={60} height={50} />
</a>
<a class="navbar-brand" href="#">    Home
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">About us </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact us</a>
      </li>
      
    </ul>
   
  </div>
</nav>
</div>
    )
}
else{
  return (
    <div>
    <nav class="navbar navbar-light bg-light justify-content-between" >
<a class="navbar-brand"></a>
<form class="form-inline">
  <div class='login'>
  <a href="/login">Login</a>
<a href="">Register</a>
  </div>

</form>
</nav>
<nav class="navbar navbar-expand-lg navbar-dark " style={{ 
      backgroundColor: ` #222222` }}>

<a class="navbar-brand" href="#">    <Image src={img} width={60} height={50} />
</a>
<a class="navbar-brand" href="#">    Home
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
  <li class="nav-item active">
    <a class="nav-link" href="#">About us </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact us</a>
  </li>
  
</ul>

</div>
</nav>
</div>
)
}
  }
  
  export default Navbar;
  
