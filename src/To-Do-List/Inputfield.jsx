import { useContext } from "react";
import { WorkListData } from "../ToDoContextStore/Storage_WorkListData";
import { addGoals } from "./todoUtils";


function Inputfield() {
  const { inputRef,setWorkList, setToDo, toDo, editId, setEditId } =
    useContext(WorkListData);
 

  return (
    <>
      <div className="flex items-center justify-center gap-3 w-full ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your goal..."
          id="inputfield"
          className=" bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl outline-none placeholder:text-slate-500
      focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              addGoals(toDo, setToDo, setWorkList, editId, setEditId);
          }}
        />

        <button
          onClick={() =>
            addGoals(toDo, setToDo, setWorkList, editId, setEditId)
          }
          className=" px-6 py-3  bg-cyan-500  text-white font-medium rounded-xl  hover:bg-cyan-600 active:scale-95 transition-all
          duration-300 shadow-lg shadow-cyan-500/20"
        >
          Add Goal
        </button>
      </div>
    </>
  );
}

export default Inputfield;
