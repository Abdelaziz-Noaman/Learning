"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  increment,
  decrement,
  undo,
  redo,
  reset,
} from "@/store/slices/counterSlice";

import styles from "../../app/page.module.css";

function HomeUI() {
  const dispatch = useAppDispatch();
  const {
    present: counterValue,
    past,
    future,
  } = useAppSelector((state) => state.counter);

  console.log(past, future);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleUndo = () => {
    dispatch(undo());
  };

  const handleRedo = () => {
    dispatch(redo());
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
        <button
          className={styles.button}
          onClick={handleUndo}
          disabled={past.length === 0}
        >
          Undo
        </button>
        <button
          className={styles.button}
          onClick={handleRedo}
          disabled={future.length === 0}
        >
          Redo
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default HomeUI;
