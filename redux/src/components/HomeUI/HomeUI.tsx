"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { increment, decrement, reset } from "@/store/slices/counterSlice";

import styles from "../../app/page.module.css";

function HomeUI() {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.center}>
      <h1>Counter</h1>
      <h1>{counterValue}</h1>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleIncrement}>
          Increment
        </button>
        <button className={styles.button} onClick={handleDecrement}>
          Decrement
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default HomeUI;
