import React, { useState } from "react";


export class LoginFormC extends React.Component {
      state = {
        email : '' ,
        password : ''
      }
      handleEmail =(e) => {
        this.setState({
            email : e.target.value 
        })

      }
      handlePassword =(e) => {
        this.setState({
         password :  e.target.value 
        })
      }
     
    render () {
        
        return (
             <div>
                 <h2>This is Class Component</h2>
                 <input type="text" name="" value={this.state.email} onChange={this.handleEmail} />
                 <input type="password" name="" value={this.state.password} onChange={this.handlePassword} />
             </div>  
        )
    }
}


export function LoginFormF (){
  
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
   
     
     function handleEmail (e) {
        setEmail(e.target.email);
     }
     function handlePassword (e) {
        setPassword(e.target.value)
     }
    return (
        <div>
              <h2>this is Function component</h2>
              <input type="text" name="" value={email} onChange={handleEmail} />
              <input type="password" name="" value={password} onChange={handlePassword} />

        </div>
    )
}


