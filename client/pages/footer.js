import img from "../public/logo.PNG"
import Image from 'next/image'

function Footer() {

  return (
<footer class=" text-center text-white" style={{ 
          backgroundColor: ` #222222` }}>
<br></br>
<Image src={img}/>

  <div class="text-center p-3" >
    © All Rights Reserved
  </div>
</footer>
    )
}

export default Footer;
