import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import { TaskList } from "./TaskList";

function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
}

export default App;
