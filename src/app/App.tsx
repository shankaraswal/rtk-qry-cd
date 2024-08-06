import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function App() {
  return (
    <>
      <div className="flex gap-6 h-screen text-white items-center bg-teal-800 justify-center">
        <Counter />
        <Todo />
      </div>
    </>
  );
}

export default App;
