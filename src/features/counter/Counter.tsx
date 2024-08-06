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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button
          onClick={() => dispatch(decrement())}
          className="p-5 bg-slate-300 text-2xl "
        >
          -
        </button>
        <span className="flex-row inline-block text-center border-red-200 border-0 p-4 w-24 text-3xl text-white font-bold">
          {counter}
        </span>
        <button
          onClick={() => dispatch(increment())}
          className="p-5 bg-slate-300 text-2xl"
        >
          +
        </button>
      </div>

      <div className="flex flex-row mt-8">
        <button
          onClick={() => dispatch(decrementBy(changeByNumber))}
          className="p-5 bg-slate-300 text-xl "
        >{`DecrementBy =>`}</button>
        <span className="flex-row inline-block">
          <input
            type="number"
            value={changeByNumber}
            onChange={(e) => setChangeByNumber(Number(e.currentTarget.value))}
            className="p-4 w-24 text-black text-center text-3xl font-bold mx-5"
          />
        </span>
        <button
          onClick={() => dispatch(incrementBy(changeByNumber))}
          className="p-5 bg-slate-300 text-xl "
        >{`<= IncrementBy`}</button>
      </div>

      <div className="flex-row mt-10">
        <button
          disabled={counter === 0}
          onClick={handleReset}
          className="p-5 bg-slate-300 text-2xl "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
