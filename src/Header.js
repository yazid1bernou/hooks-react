import React  , {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header () {
      const themeContext =  useContext(ThemeContext);
      let styleVariable = {} ;
      if(themeContext.theme === 'dark'){
        styleVariable = {
             background : 'red' ,
             color : '#FFF'
         }
      }
      else {
        styleVariable = {
            background : '#FFF' ,
            color : 'red'
        }
      }
    return (
        <div style={styleVariable}>
              This is Header Page
        </div>
    )
}