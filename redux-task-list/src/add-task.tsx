import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTask,
  deleteTask,
  addTask,
} from "./Redux/Store/features/taskslice";
import { AppState } from "./Redux/Store/store";
import { Task, TasksState } from "./Redux/Store/features/taskslice";

const Addtodo = () => {
  const [Text, setText] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTask({
        id: (Date.now() + Math.floor(Math.random() * 1000000)).toString(),
        text: Text,
        completed: false,
      })
    );
    setText("");
  };
  return (
    <form
      className="flex justify-between w-full"
      onSubmit={handleSubmit}
      action=""
    >
      <input
        className="w-[80%]  rounded-md h-9 p-2 focus:bg-none focus:outline-none"
        value={Text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        className="w-[10%] rounded-md bg-blue-600 text-white"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Addtodo;
