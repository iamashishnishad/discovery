import "./Style/Header.css"



function Header(){

    return(
        <div>
            <div className="Header">

          <div className="HeaderImg1"> <img src="https://www.diversitybiosciences.com/logo.png" alt="img"></img> </div>
          <div> <input placeholder="Enter CAS No., Catalog No. Or Product Name" /> </div>
          <div className="text">
            <h4>+919948872227</h4>
            <h4>sales@diversitybiosciences.com</h4>
          </div>
          </div>

          <div className="HeaderList">
            <div>HOME</div>
            <div>PRODUCT</div>
            <div>SERVICES</div>
            <div>ABOUT </div>
            <div>CONTACT</div>
          </div>

        </div>
        
    )

}

export default Header;