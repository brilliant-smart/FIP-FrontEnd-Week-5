import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-center">Counter: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-success w-100"
      >
        Click to Count
      </button>
    </div>
  );
}

export default State;
