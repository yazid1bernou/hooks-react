import React  , {useContext} from "react";
import {ThemeContext} from "./ThemeContext";


export default function Login () {
       const themeContext =  useContext(ThemeContext)
       let styleVariable = {} ;
       if (themeContext.theme === 'dark'){
        styleVariable =  {
              background: 'blue', 
              color: '#FFF'
           }
       }
       else {
        styleVariable = {
            background :  '#FFF',
            color : 'blue'
         }
       }
    return (
        <div style={styleVariable} > 
               This is Login Page    
        </div>
    )
}