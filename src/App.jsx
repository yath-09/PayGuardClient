import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function  App() {
  const [result,setResult]=useState(null)

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api");
        setResult(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 


  return (
    <div>
      welcome to PayGuard ${result}
    </div>
  )
}

export default App
