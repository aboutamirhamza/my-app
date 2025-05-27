import { useState } from "react";
import Header from "./Components/Header/Header";
import Display from "./Components/Display";
import Button from "./Components/Button";

function App() {
  
  const [count,setCount] = useState(0);

  return (
    <>
      {/* <h1><Header title="My Count" /> {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Add</button> */}

      <Display show={count} />
      <Button count={count} setCount={setCount} />
    </>
  )
}

export default App;
