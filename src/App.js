
/* import {LoginFormC , LoginFormF} from "./LoginForm";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Login from "./Login";
import ToggleTheme from "./ToggleTheme";

 */
import React, { useCallback, useContext  , useState} from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import  { AuthContext , AuthProvider } from "./Context/AuthContext";
import { FunctionComponents } from "./components/FunctionComponent";
import Count from "./components/Count";
import Button from "./components/Button";

 /*  const [visible , setVisible ] = useState(true);  */
   
 function App() {
    const [count , setCount] =  useState(0) ;
    
    function increment () {
      setCount(s => s + 1);
    }
    const incrementCallback =  useCallback(increment , [])
 // const authContext =  useContext(AuthContext)
  return (
    
    <div className="container">
          
          <div>
              Count : {count} 
              <Button type="" onClick={incrementCallback}>Increment </Button>
          </div>
            
         {/*      <Header />
              { authContext.auth.email ? 'Welcome' :
              <Login />
              }
             
                
            <FunctionComponents />
            <Count />
               */}
           
              
            
      {/*    <ThemeProvider> 
                <Header />
                <Login />
                <hr/>
                <ToggleTheme />
                
         </ThemeProvider>
           
          
          {visible ?

          <>
          <LoginFormC />
          <LoginFormF />
          </> : null 
        
          }   
        
          <button type="button" onClick={() =>  setVisible( ! visible)}> Button Visible</button>  */}
          
    </div>
  );
}

 class Appclass extends React.Component {
    state = {
      count : 0 , 
    }
    increment = () =>{
        this.setState({ count : this.state.count + 1 })
    }
     render () {
         return (
           
          <div>
                Count : {this.state.count}   
                <Button type="button" onClick={this.increment}> Increment </Button>  
          </div>
         )
     }
 }


function AppWithSrore () {
  return (
    <AuthProvider>
       <App  />
    </AuthProvider>
  )
  
}

export default Appclass; 
