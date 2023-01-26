import React , {useState} from "react";

export const ThemeContext = React.createContext();  


export function ThemeProvider (props) {
     // state 
     const [theme , setTheme] =  useState('dark');
     function toggleTheme () {
        setTheme(theme === 'dark' ? 'light' : 'dark');
     }
   return (
      <ThemeContext.Provider value={{theme , toggleTheme}}>
          {props.children}
      </ThemeContext.Provider>
   )
}