import { useState } from "react";

function App()
{
  const [count, setCount] = useState(0);
  function handleClick()
  {
    setCount(prev=>prev+1);
  }

  return(
    <div className="m-4">
      <h1 className="">Hello Next.js</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick} className="bg-black border-black text-white px-2 py-2 rounded-full mt-2 hover:bg-gray-500">Incremen</button>
    </div>
  )
}
export default App;