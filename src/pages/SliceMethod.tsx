import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function SliceMethod() {
  return (
    <div className="flex flex-col gap-4 justify-center w-full">
      <Counter />
      <Todo />
    </div>
  );
}

export default SliceMethod;
