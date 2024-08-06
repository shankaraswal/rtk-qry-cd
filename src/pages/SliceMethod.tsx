import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function SliceMethod() {
  return (
    <>
      <Counter />
      <hr className="border-separate border-2  my-16 w-full" />
      <Todo />
    </>
  );
}

export default SliceMethod;
