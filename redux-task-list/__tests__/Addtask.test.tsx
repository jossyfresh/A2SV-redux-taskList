import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import Addtodo from "../src/add-task";
import { RootState } from "../src/Redux/Store/store";

const middlewares = [thunk];
const mockStore = configureMockStore<RootState>(middlewares);

let store: MockStore<RootState>;

beforeEach(() => {
  store = mockStore();
});

test("dispatches task when submitted", () => {
  render(
    <Provider store={store}>
      <Addtodo />
    </Provider>
  );

  const input = screen.getByLabelText("Task input");
  const button = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "Test Task" } });
  fireEvent.click(button);

  const actions = store.getActions();

  expect(actions).toEqual([
    {
      type: "tasks/addTask",
      payload: {
        text: "Test Task",
        completed: false,
        id: expect.any(Number),
      },
    },
  ]);
});
