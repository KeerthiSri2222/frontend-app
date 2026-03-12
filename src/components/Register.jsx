import {Link} from "react-router-dom"
import {useState} from  "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
function Register(){
    const [user,setUser]=useState({})
    const API_URL=import.meta.env.VITE_API_URL
    const Navigate=useNavigate()
    const handleSubmit=async()=>{
        const URL=API_URL+"/auth/signup"
        const response=await axios.post(URL,user)
        Navigate("/login")

    }
    return(
        <div>
            <h1>Register</h1>   
            <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Username"/></p>
            <p><input type="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email"/></p>
            <p><input type="password" onChange={(e)=>setUser({...user,password:e.target.value})}  placeholder="Password"/></p>
            <p><button onClick={handleSubmit}>Register</button></p>
            <p>Already have an account? <Link to="/login">Login here</Link></p> 
        </div>
    )
}
export default Register