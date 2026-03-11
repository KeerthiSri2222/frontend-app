import {Link} from "react-router-dom"
function Login(){
    return(
        <div>
        <h1>Login</h1>
        <p><input type="text" placeholder="email"/></p>
        <p><input type="password" placeholder="password"/></p>
        <p><button>Login</button></p>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>

        </div>
    )
}
export default Login