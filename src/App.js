import { useState } from "react"
import {LoginFormC , LoginFormF} from "./LoginForm";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Login from "./Login";
import ToggleTheme from "./ToggleTheme";
function App() {

  const [visible , setVisible ] = useState(true); 
   
    
  return (
    
    <div>

         <ThemeProvider> 
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
        
          <button type="button" onClick={() =>  setVisible( ! visible)}> Button Visible</button> 
          
    </div>
  );
}


export default App; 
