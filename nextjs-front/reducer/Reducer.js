import { remove, put } from "../utils/utils";
export default function reducer(state, action) {
  switch (action.type) {
    case "INITIAL_STATE":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DONE_TODO":
      const temp = [...state.tasks].map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            task_status: !action.payload.task_status,
          };
        } else return item;
      });
      const edited = temp.filter((task) => task.id === action.payload.id);
      put(`/task/${action.payload.id}`, { ...edited[0] });
      return {
        ...state,
        tasks: [...temp],
      };
    case "UPDATE_TODO":
      const updateTemp = [...state.tasks].map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            task_name: action.payload.task_name,
          };
        } else return item;
      });
      return {
        ...state,
        tasks: [...updateTemp],
      };
    case "DELETE_TODO":
      const removed = [...state.tasks].filter(
        (task) => task.id !== action.payload.id
      );
      remove(`/task/${action.payload.id}`);
      return {
        ...state,
        tasks: [...removed],
      };
  }
}
