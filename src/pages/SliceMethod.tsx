import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function SliceMethod() {
  return (
    <>
      <h2 className="font-bold w-full text-3xl text-red-900  mb-6">
        RTK Slice Method
      </h2>
      <div className="items-center justify-center">
        <Counter />
        <hr className="border-separate border-2  my-16 w-full" />
        <Todo />
      </div>
    </>
  );
}

export default SliceMethod;
