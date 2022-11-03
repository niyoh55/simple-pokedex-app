import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSliceActions } from "../Features/Slices/CounterSlice";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const btnOneHandler = () => {
    dispatch(counterSliceActions.addOneToCounter());
  };

  const btnTwoHandler = () => {
    dispatch(counterSliceActions.minusOneCounter());
  };

  const btnThreeHandler = () => {
    dispatch(counterSliceActions.addPayloadToCounter(50));
  };

  //console.log(counter);

  return (
    <div>
      <h1 className="text-9xl">{counter}</h1>

      <button className="btn btn-xl btn-primary" onClick={btnOneHandler}>
        ADD ONE
      </button>

      <button className="btn btn-xl btn-secondary" onClick={btnTwoHandler}>
        MINUS ONE
      </button>

      <button className="btn btn-xl btn-secondary" onClick={btnThreeHandler}>
        ADD ANY NUMBER
      </button>
    </div>
  );
};

export default Counter;
