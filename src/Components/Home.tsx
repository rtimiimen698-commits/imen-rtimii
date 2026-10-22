import React, { useState } from "react"

interface propsHome{
    name : string,
    age : number
}

const Home : React.FC<propsHome>=({name, age})=>{

    const [count, setCount] = useState<number>(0)
    const [inputText, setInputText] = useState<number>(0)
    return(
        <div>
            <h2>Home Component</h2>
            <h3>My  name is {name} and my age is {age}</h3>
            <h2>Counter State</h2>
            <button onClick={()=> setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <br/>
            <input type="number" value={inputText} onChange={(e)=> setInputText(+e.target.value)}/>
            <h2>{inputText}</h2>
        </div>
    )
}

export default Home