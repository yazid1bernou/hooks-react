import React, { useEffect, useRef, useState } from "react";


export function FunctionComponents () {
    
    const [fistName , setFirstName] =  useState('');
    const [lastName , setLastName] =  useState('');
    const fistNameRef = useRef();
    const lastNameRef =  useRef();
    const buttonRef =  useRef();
    
    useEffect ( () =>{
        fistNameRef.current.focus();
    }, []);
    function onFirstInputKey (e) {
      if(e.key =='Enter'){
        lastNameRef.current.focus();
      }
    }
    function onLastInputKey(e) {
        if(e.key =='Enter'){
            lastNameRef.current.focus() ;
        }
    }
    function save () {
       console.log({fistName , lastName })
    }
    return (
        <div>
            
                 <input type="" name=""  ref={fistNameRef} onKeyDown={onFirstInputKey}  value={fistName} onChange={e => setFirstName(e.target.value)} />
                 <input type="" name="" ref={lastNameRef} onKeyDown={onLastInputKey} value={lastName} onChange={e => setLastName(e.target.value)} />
                 <button type="" ref={buttonRef}   onClick={save}> Save</button> 
            
        </div>
    )
}