import { useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  
  const [count,setCount] = useState(0);

  return (
    <>
      <h1><Header title="My Count" /> {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Add</button>
    </>
  )
}

export default App;
