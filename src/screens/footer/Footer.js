import React from 'react'
import  "./Footer.css"
function Footer() {
  return (
    <div><footer>
    <div class="footer">
    <div class="footer-row">
    <a href="https://www.facebook.com/anish.gehlot.102/"><i class="fa fa-facebook footer-blue"></i></a>
    <a href="https://www.instagram.com/anish31_2/"><i  class="fa fa-instagram footer-insta"></i></a>
    <a href="https://www.youtube.com/@anishgehlot3745/videos#"><i  class="fa fa-youtube footer-red"></i></a>
    <div className="icon-container">
    <a href="https://twitter.com/AnishGehlot6" className="icon-link">
      <i className="fa fa-twitter"></i>
    </a>
    <div className="message">Catch me</div>
  </div>
    </div>
    
 
    
    <div class="footer-row">
    Anish Copyright © 2021  - All rights reserved || Designed By: Anish 
    </div>
    </div>
    </footer></div>
  )
}

export default Footer