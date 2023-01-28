import React  , {useState , useMemo} from "react"; 

export default function ComponentuseMemo () {
    const [firstname , setFistname] =  useState('') ;
    const [lastname , setLastname] =  useState('') ;
    const [age , setAge] =  useState('') ;
    const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    const fullName  = useMemo( ()=> <div>
         {firstname} - {lastname} 
    </div> , [firstname , lastname])
    return (
        
        <div>
            <div style={{color : randomColour()}}>
            {fullName}
            {age}
            </div>
          
            <input type="text" name="" value={firstname} placeholder="First Name" onChange={e => setFistname(e.target.value)} /> 
            <input type="text" name="" value={lastname} placeholder="Last Name" onChange={e => setLastname(e.target.value)}/>
            <input type="text" name="" value={age} placeholder="Age" onChange={e => setAge(e.target.value)}/>
        </div>
    )
}


