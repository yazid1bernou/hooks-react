import React , {useEffect, useState} from "react";

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
function useCount () {
    const [count , setCount] = useState(0);
    
    function increment() {
       setCount(c => c + 1); 
    }
    function decrement() {
        setCount( c => c > 0 ? c - 1 : c); 
    }
    return {
        count , increment , decrement 
    }
}

export default function CustomHooks () {
    const {count ,increment, decrement} = useCount();

    useEffect(() =>{
        function handleBGColor(){
            document.body.style.background  = 'red' ;
        };
        handleBGColor();
    } , [])
    return (
        <div>
            Count : {count}
            <button type="button" onClick={increment}>Increment </button>
            <button type="button" onClick={decrement}>Decrement </button>

        </div>
    )
}