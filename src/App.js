import { useState } from "react"
import {LoginFormC , LoginFormF} from "./LoginForm"
function App() {

  const [visible , setVisible ] = useState(true); 
   
  
  return (
    
    <div>
          
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
