import React, { useState } from "react";

const QuantityButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center justify-center border border-white rounded-full px-4 py-1 space-x-4 text-white">
      <button onClick={decrement} className="text-xl hover:text-purple-300">
        −
      </button>
      <span className="text-xl">{count}</span>
      <button onClick={increment} className="text-xl hover:text-purple-300">
        +
      </button>
    </div>
  );
};

export default QuantityButton;
