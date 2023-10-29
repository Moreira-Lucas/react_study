import React, {useState} from 'react';

const StateComponent = () =>{
    const [count, setCount] = useState(0);

    return(
        <>
        <h1>USE STATE NA PRÁTICA</h1>
        <h2>Contador: {count}</h2>
        <button onClick={()=>setCount(count+1)}>+1</button>
        
        </>

    );

}
export default StateComponent;
