import React, { useEffect, useRef, useState } from 'react'

const LearnHooks = () => {
    const btnRef = useRef();
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count);
    },[]);
  return (
  <div>
    <button style={{display:"none"}}  ref={btnRef} onClick={()=> setCount(count+1)}>Add Count</button>
    
    Counter:{count}
     <br /> <br />   
    <button onClick={()=> {
        btnRef.current.click()
        btnRef.current.style.display = "block";
    }}>Trigger Count</button>
  </div> 
  )
}

export default LearnHooks;