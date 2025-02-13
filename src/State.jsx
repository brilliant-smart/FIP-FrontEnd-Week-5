import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-center">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-primary w-100"
      >
        Click to Count
      </button>
    </div>
  );
}

export default State;
