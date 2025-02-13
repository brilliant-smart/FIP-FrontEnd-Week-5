import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>Auto-focus Input</p>
      <input
        ref={inputRef}
        placeholder="Type here..."
        className="form-control"
      />
    </div>
  );
}

export default FocusInput;
