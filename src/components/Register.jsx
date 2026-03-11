import {Link} from "react-router-dom"
function Register(){
    return(
        <div>
            <h1>Register</h1>   
            <p><input type="text" placeholder="Username"/></p>
            <p><input type="email" placeholder="Email"/></p>
            <p><input type="password" placeholder="Password"/></p>
            <p><button>Register</button></p>
            <p>Already have an account? <Link to="/login">Login here</Link></p> 
        </div>
    )
}
export default Register