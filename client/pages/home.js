import Navbar from './navbar'
import Footer from './footer'
import Login from './login'
function Home() {
  if (typeof window !== 'undefined') {
    var local = localStorage.getItem("Data");}

    if (local !== "undefined" && local !== null) {

    return (<>

    <Navbar></Navbar>
<body>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

    <div class="divLogo" >
        <div class="logo"></div>
        <div class="logoB"></div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
</body>
<Footer></Footer>
    </>
    )
    }else{
      return (
    <Login></Login>
      )}
  }
  
  export default Home;
  
