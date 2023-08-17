import React from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "./Redux/Store/features/taskslice";

interface Props {
  opened: boolean;
  id: number;
  text: string;
  close: () => void;
}

export default function Edittodo(props: Props) {
  const [Text, setText] = React.useState<string>(props.text);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center ${
        props.opened ? "block bg-black bg-opacity-50 " : "hidden"
      }`}
    >
      <div className="relative w-full max-w-lg max-h-lg opacity-">
        <div className="relative bg-white rounded-lg  shadow-right-bottom-blur flex flex-col">
          <div className="flex items-start justify-between pt-3 px-2  rounded-t ">
            <h3 className="text-lg text-black">Edit To-Do</h3>
            <button
              type="button"
              onClick={() => {
                props.close();
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-1 inline-flex items-center  dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <input
            type="text"
            value={Text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="w-[80%] border border-black rounded-md h-9 p-2 focus:bg-none focus:outline-none flex self-center mb-5"
          />
          <button
            onClick={() => {
              dispatch(updateTask({ id: props.id, text: Text }));
              props.close();
            }}
            className="w-[10%] Done rounded-md bg-green-600 text-white self-center mb-5"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
