import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counterState.count);
  const [changeByNumber, setChangeByNumber] = useState<number>(0);

  const handleReset = () => {
    console.log(changeByNumber);
    setChangeByNumber(0);
    dispatch(reset());
  };
  return (
    <div className="h-4/5 rounded-xl py-6 w-2/6 text-black border-neutral-400 p-4 bg-neutral-200">
      <h1 className="text-4xl my-6 text-teal-900 font-semibold underline">
        Counter Slice/Reducers
      </h1>
      <div className="flex flex-row">
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-2 bg-teal-800 text-white text-4xl"
        >
          -
        </button>
        <span className="flex-row inline-block text-center border-red-200 border-0 p-4 w-24 text-3xl text-teal-700 font-bold">
          {counter}
        </span>
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-2 bg-teal-800 text-white text-4xl "
        >
          +
        </button>
      </div>

      <div className="flex flex-row mt-8">
        <button
          onClick={() => dispatch(decrementBy(changeByNumber))}
          className="px-5 py-2 bg-teal-800 text-white text-xl"
        >{`DecrementBy =>`}</button>
        <span className="flex-row inline-block">
          <input
            type="number"
            value={changeByNumber}
            onChange={(e) => setChangeByNumber(Number(e.currentTarget.value))}
            className="p-4 w-24 text-teal-900 text-center text-3xl font-bold mx-5"
          />
        </span>
        <button
          onClick={() => dispatch(incrementBy(changeByNumber))}
          className="px-5 py-2 bg-teal-800 text-white text-xl"
        >{`<= IncrementBy`}</button>
      </div>

      <div className="flex-row mt-10">
        <button
          disabled={counter === 0}
          onClick={handleReset}
          className="px-5 py-2 bg-teal-800 text-white text-xl "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
