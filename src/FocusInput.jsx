import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto-focus Input</h2>
      <input
        ref={inputRef}
        placeholder="Type here..."
        className="form-control"
      />
    </div>
  );
}

export default FocusInput;
