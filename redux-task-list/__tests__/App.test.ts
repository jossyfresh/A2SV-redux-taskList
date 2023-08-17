import taskReducer, { 
    deleteTask,
    toggleTask,
    updateTask,
    addTask, 
  } from '../src/Redux/Store/features/taskslice';
import { TasksState } from '../src/Redux/Store/features/taskslice';
  
  let nextTaskId = 0;
  const getNextId = () => nextTaskId++;
  
  describe('task slice', () => {
  
    let initialState:TasksState;
  
    beforeEach(() => {
      initialState = {
        tasks: []
      };
      nextTaskId = 0;
    });
  
    it('adds a task', () => {
      const taskText = 'Do laundry';
      const action = addTask({id: getNextId(), text: taskText, completed: false}); 
  
      const result = taskReducer(initialState, action);
  
      expect(result.tasks.length).toEqual(1);
      expect(result.tasks[0].text).toEqual(taskText);
    });
  
    it("toggles a task", () => {

      const taskText = 'Do laundry';
      const action = addTask({id: getNextId(), text: taskText, completed: false});
      const result = taskReducer(initialState, action);

      const toggleAction = toggleTask(result.tasks[0].id);
      const toggleResult = taskReducer(result, toggleAction);

      expect(result.tasks.length).toEqual(1);
      expect(toggleResult.tasks[0].completed).toEqual(true);
    }
    );

    it("deletes a task", () => {

      const taskText = 'Do laundry';
      const action = addTask({id: getNextId(), text: taskText, completed: false});
      const result = taskReducer(initialState, action);

      const deleteAction = deleteTask(result.tasks[0].id);
      const deleteResult = taskReducer(result, deleteAction);

      expect(result.tasks.length).toEqual(1);
      expect(deleteResult.tasks.length).toEqual(0);
    }
    );

    it('updates a task', () => {
      const taskText = 'Do laundry';
      const action = addTask({id: getNextId(), text: taskText, completed: false});
      const result = taskReducer(initialState, action);

      const updateAction = updateTask({id: result.tasks[0].id, text: 'Do not do laundry'});
      const updateResult = taskReducer(result, updateAction);

      expect(result.tasks.length).toEqual(1);
      expect(updateResult.tasks[0].text).toEqual('Do not do laundry');
    }
    );
  });
  