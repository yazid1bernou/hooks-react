import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Header () {

    const authContext = useContext(AuthContext);
    function logout () {
       localStorage.removeItem('email');
       localStorage.removeItem('token');
       authContext.setAuth({});
    }
    return (
      
           <nav class="navbar bg-body-tertiary mt-2 mb-2">
                <div className="container-fluid">
                   <a className="navbar-brand" href="#">YazidDev Hooks</a>
                   <div>
                      {authContext.auth.email ? <div>
                         {authContext.auth.email}
                         <button type="button" className="btn btn-danger" onClick={logout}> Logout</button>
                      </div> : ' You need to login' }
                   </div>
                </div>
           </nav>
 
    )
}