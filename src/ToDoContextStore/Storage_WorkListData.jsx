/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { useRef } from "react";


export const WorkListData = createContext();

export const WorkListDataProvider = ({ children }) => {
  const [workList, setWorkList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [editId, setEditId] = useState(null);
  const [completed, setCompleted] = useState([]);
   const inputRef = useRef(null);

  return (
    <WorkListData.Provider
      value={{
        completed,
        setCompleted,
        editId,
        setEditId,
        workList,
        setWorkList,
        toDo,
        setToDo,
        inputRef
      }}
    >
      {children}
    </WorkListData.Provider>
  );
};
