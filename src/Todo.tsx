import { useState } from "react";

// ① 定义待办项的数据结构
interface Item {
  id: number;
  text: string;
}

const Todo: React.FC = () => {
  // ② items 使用泛型 <Item[]>
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState<string>("");

  // ③ 事件类型
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setItems(prev => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  const removeItem = (id: number) =>
    setItems(prev => prev.filter(i => i.id !== id));

  return (
    <section style={{ marginTop: 24 }}>
      <h2>Todo List</h2>

      <form onSubmit={addItem} style={{ marginBottom: 12 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button>Add</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
