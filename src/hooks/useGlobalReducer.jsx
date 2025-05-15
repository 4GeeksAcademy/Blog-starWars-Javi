// hooks/useGlobalReducer.jsx
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "./store"; // ✅
import { createActions } from "./actions"; // ✅

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  // Para que actions tenga acceso a dispatch y al estado actual
  const getStore = () => store;
  const actions = createActions(dispatch, getStore);

  return (
    <StoreContext.Provider value={{ store, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}
