"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  increment,
  decrement,
  undo,
  redo,
  reset,
  fetchDataRequest,
} from "@/store/slices/counterSlice";

import styles from "../../app/page.module.css";

function HomeUI() {
  const dispatch = useAppDispatch();
  const {
    present: counterValue,
    past,
    future,
    data,
    loading,
    error,
  } = useAppSelector((state) => state.counter);

  console.log(loading, error, data);

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

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div className={styles.center}>
      <div>
        <h2>Loading: {JSON.stringify(loading)}</h2>
        <br />
        <h2>Error: {JSON.stringify(error)}</h2>
        <br />
        <h3>data: {JSON.stringify(data)}</h3>
      </div>
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
