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
    <div className="w-full text-black">
      <h3 className="text-xl font-bold  text-red-700 mb-6">
        Counter Slice/Reducers
      </h3>
      <div className="flex flex-row mt-16">
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-2 bg-red-800 text-white text-4xl"
        >
          -
        </button>
        <span className="flex-row inline-block text-center border-red-200 border-0 p-4 w-24 text-3xl text-red-700 font-bold">
          {counter}
        </span>
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-2 bg-red-800 text-white text-4xl "
        >
          +
        </button>
      </div>

      <div className="flex flex-row mt-8">
        <button
          onClick={() => dispatch(decrementBy(changeByNumber))}
          className="px-5 py-2 bg-red-800 text-white text-xl"
        >{`DecrementBy =>`}</button>
        <span className="flex-row inline-block">
          <input
            type="number"
            value={changeByNumber}
            onChange={(e) => setChangeByNumber(Number(e.currentTarget.value))}
            className="p-4 w-24 text-red-700 text-center text-3xl font-bold mx-5"
          />
        </span>
        <button
          onClick={() => dispatch(incrementBy(changeByNumber))}
          className="px-5 py-2 bg-red-800 text-white text-xl"
        >{`<= IncrementBy`}</button>
      </div>

      <div className="flex-row mt-10">
        <button
          disabled={counter === 0}
          onClick={handleReset}
          className="px-5 py-2 bg-red-800 text-white text-xl "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
