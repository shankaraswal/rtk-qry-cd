import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

function SliceMethod() {
  return (
    <>
      <h2 className="font-bold w-full text-3xl text-red-900  mb-6">
        RTK Slice Method
      </h2>
      <div className="flex flex-row gap-10 w-full">
        <div className="bg-white p-6 rounded shadow-md w-1/2 space-y-6 font-bold">
          <Counter />
        </div>
        <div className="bg-white p-6 rounded shadow-md w-1/2  space-y-3">
          <Todo />
        </div>
      </div>
    </>
  );
}

export default SliceMethod;
