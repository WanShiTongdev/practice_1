import { useState } from "react";
import reactLogo from "./assets/react.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="custom-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
