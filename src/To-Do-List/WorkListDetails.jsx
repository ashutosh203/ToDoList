import { useContext } from "react";
import { WorkListData } from "../ToDoContextStore/Storage_WorkListData";
import { Pencil, Trash2 } from "lucide-react";
import { completeTask, DeleteToDoList, EditToDoList } from "./todoUtils";

function WorkListDetails() {
  const {inputRef,  setCompleted , workList, setWorkList , setEditId,  setToDo} = useContext(WorkListData);


  return (
    <div className="space-y-3">
      {workList.map((e) => (
        <div
          key={e.id}
          className="
            flex items-center justify-between
            bg-slate-800
            border border-slate-700
            rounded-xl
            px-4 py-3
            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/10
            transition-all duration-300
          "
        >
          {/* Checkbox + Task */}
          <label className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
            <input
              type="checkbox"
              className="
                w-5 h-5
                accent-cyan-500
                cursor-pointer
              "
              checked={e.completed}
              onChange={()=>completeTask(e.id , setWorkList , setCompleted ,workList)}
            />

            <span className="text-white text-lg break-all">{e.task}</span>
          </label>

          {/* Action Buttons */}
          {/* this is a Edit button  */}
          <div className="flex items-center gap-2">
            <button
              className="
                p-2 rounded-lg
                bg-blue-500/20
                text-blue-400
                hover:bg-blue-500/30
                transition
              "
              onClick={()=> EditToDoList(e.id, workList,  setToDo , setEditId, inputRef)}
            >
              <Pencil size={18} />
            </button>

            {/* this is a delete button  */}
            <button
              className="
                p-2 rounded-lg
                bg-red-500/20
                text-red-400
                hover:bg-red-500/30
                transition
              "
              onClick={() => DeleteToDoList(e.id, setWorkList)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkListDetails;
