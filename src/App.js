
/* import {LoginFormC , LoginFormF} from "./LoginForm";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Login from "./Login";
import ToggleTheme from "./ToggleTheme";

 */
import { useContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import  { AuthContext , AuthProvider } from "./Context/AuthContext";


 /*  const [visible , setVisible ] = useState(true);  */
   
 function App() {
  
  const authContext =  useContext(AuthContext)
  return (
    
    <div className="container">
            
              <Header />
              { authContext.auth.email ? 'Welcome' :
              <Login />
              }
             
                
           
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

function AppWithSrore () {
  return (
    <AuthProvider>
       <App  />
    </AuthProvider>
  )
  
}

export default AppWithSrore; 
