import { createContext, useReducer } from "react";
import reducer from "../reducer/Reducer";

export const StateContext = createContext();

let initialState = {
  tasks: [],
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
