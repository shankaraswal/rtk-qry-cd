import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function App() {
  return (
    <>
      <div className="flex h-screen text-white items-center bg-teal-800 justify-center">
        <Todo />
        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
