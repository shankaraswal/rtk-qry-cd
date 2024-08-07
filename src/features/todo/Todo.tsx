import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoState.todos);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          description: todo,
          completed: false,
        })
      );
      setTodo("");
    } else {
      setError("Please enter a todo description");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setError("");
  };

  return (
    <div className="w-full text-black">
      <h3 className="text-xl font-bold  text-red-700 mb-6">
        Todo Slice/Reducers
      </h3>
      <form
        className="w-full items-center mt-16 justify-center flex flex-col"
        onSubmit={handleAddTodo}
      >
        <input
          type="text"
          className="w-full p-4"
          placeholder="Add todo"
          value={todo}
          onChange={handleChange}
        />

        <button className="w-60 p-2 mt-4 text-white justify-self-center bg-red-800 text-2xl">
          Add todo
        </button>
      </form>
      {error && <p className="text-red-700 text-center m-4 text-xl">{error}</p>}
      <div className="mt-4 text-black overflow-auto h-96">
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            className="flex flex-row py-2 space-x-10 items-start justify-between border-b-2 border-white"
          >
            <p>{index + 1}</p>
            <p
              className={`${
                todo.completed ? "line-through text-red-700" : ""
              } `}
            >
              {todo.id}
            </p>
            <p
              className={`${
                todo.completed ? "line-through text-red-700" : ""
              } `}
            >
              {todo.description}
            </p>
            <p>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch(
                    toggleTodo({
                      id: todo.id,
                      description: todo.description,
                      completed: !todo.completed,
                    })
                  )
                }
              />
            </p>

            <p
              className="text-red-700 font-bold font-sans hover:bg-red-200 cursor-pointer px-2"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              D
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
