import { useState } from "react";

const Counter: React.FC = () => {
  // <number> 显式声明状态为数字
  const [count, setCount] = useState<number>(0);

  // 事件类型：React.MouseEvent<HTMLButtonElement>
  const handleClick = (delta: number) => () =>
    setCount(prev => prev + delta);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={handleClick(-1)}>-</button>
      <span>{count}</span>
      <button onClick={handleClick(1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
