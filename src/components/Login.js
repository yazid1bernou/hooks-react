import React , {useContext, useState} from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Login () {
    const [email , setEmail] = useState('');
    const [password ,  setPassword] = useState('');
    const authContext =  useContext(AuthContext);
    function login (e) {
        e.preventDefault();
        if(password === '123'){
            const token = '1fgdsdjsjsdh84'
            localStorage.setItem('email' , email )
            localStorage.setItem('token' , token )
            authContext.setAuth({email , token})
            
        }else {
            alert('wrong password !!!!')
        }
        
      
    } 
    
    return (
         <div>
              <h1>Login</h1>
              <form>
                    <input type="text" className="form-control" placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)} />
                    <br />
                    <input type="password" className="form-control" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)} />
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={login}>login</button>

              </form>
         </div>
    )
}