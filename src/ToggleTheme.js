import React ,  { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function ToggleTheme () {
    const themeContext =  useContext(ThemeContext);
    return (
        <div>
             <button type="button" onClick={themeContext.toggleTheme} >  Change Theme</button>
        </div>
    )
}