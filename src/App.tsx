import Counter from "./Counter";
import Todo from "./Todo";

const App: React.FC = () => (
  <main style={{ padding: 32, fontFamily: "sans-serif" }}>
    <h1>Hello React + TypeScript 🚀</h1>
    <Counter />
    <Todo />
  </main>
);

export default App;
