import "./App.css";

import { useEffect, useState } from "react";
function Advice(){
const [advice,setadvice]=useState(null);
const [loading,setloading]=useState(true);
 const fetchData= async()=>{
    setloading(true);

try{
    const response= await fetch("https://api.adviceslip.com/advice")
 const result= await response.json();
 console.log(result.slip.advice); 
 setadvice(result.slip.advice)


}catch(error){
    console.log('error',error);
}finally{
    setloading(false);
}
 };
useEffect(()=>{fetchData},[]);

  return (

 <div className="advice">
      <div className="advisory">
        <h1 id="me">Get a Random Advice </h1>
        {loading ? <p> loading please wait...</p> : <p>{advice}</p>}

        <button
          className="btn"
          onClick={() => {
            fetchData();
          }}
        >
          <p>Click  to get another advice</p>
        </button>
      </div>
    </div>
    
   
  );
}

export default Advice;

  