import { useContext } from "react"
// import { LoginDetails } from "./AuthenContext"
import { Link } from "react-router-dom";



const Navbar=()=>{
    // const{authen,logOut}=useContext(LoginDetails);

const login_button={
    padding:'10px 20px',
    backgroundColor:'green',
    display:'flex',
    justifyContent:'center',
    color:'white',
    borderRadius:'5px',
    width:'250px',
    fontSize:'20px',
    fontWeight:'bolder'
}

    return(
        <div className="main">
            <div className="Nav_section">
            <nav>
                <ul>
                    <p className="App">
                        Dashboard
                    </p>
                    
                            <Link to="/login">
                            <li><button style={login_button}>Login</button></li>
                            </Link>
                    
                </ul>
            </nav>
        </div>
        </div>
    )
};


export default Navbar;