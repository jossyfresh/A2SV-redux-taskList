import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "./Redux/Store/features/taskslice";
import { Task, TasksState } from "./Redux/Store/features/taskslice";
import Addtodo from "./add-task";
import Edittodo from "./Edit-task";

export function TaskList() {
  const [opened, setOpened] = React.useState<boolean>(false);
  const tasks = useSelector(
    (state: { tasks: TasksState }) => state.tasks.tasks
  ) as Task[];
  const dispatch = useDispatch();

  const close = () => {
    setOpened(false);
  };

  return (
    <>
      <div className="ml-52 mt-10">
        <div className="bg-blue-300 w-3/4 flex items-center self-center justify-center rounded-md text-3xl text-black p-3">
          Task list
        </div>
        <div className="w-3/4 flex justify-center mt-4">
          <Addtodo />
        </div>
        <div className="w-3/4 mt-3 TaskList">
          {tasks?.map((task) => (
            <div className="flex justify-between mb-4 TaskList ">
              {opened ? (
                <Edittodo
                  opened={opened}
                  close={close}
                  id={task.id}
                  text={task.text}
                />
              ) : null}
              <div className="bg-blue-300 flex items-center w-[80%] rounded-md">
                <div className="">
                  <p className="ml-2 items-center mt-1.5">{task.text}</p>
                </div>
              </div>
              <div className="flex w-[10%] gap-6  justify-center items-center mt-1">
                <div className="">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    // dispatch the marking the task as done action
                    onChange={() => dispatch(toggleTask(task.id))}
                    className="w-7 h-7 completed justify-center items-center text-xl text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="">
                  <button
                    className="delete"
                    // dispatch the delete action to redux store
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    <svg
                      className="w-7 h-7 shrink-0 justify-center items-center"
                      viewBox="0 -0.5 21 21"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>delete</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-179.000000, -360.000000)"
                          fill="#FF0000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                              id="delete-[#1487]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="">
                  <button
                    className="edit"
                    onClick={() => {
                      setOpened(true);
                    }}
                  >
                    <svg
                      className="w-7 h-8 shrink-0 justify-center items-center"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
