import { useContext } from "react";
import { WorkListData } from "../ToDoContextStore/Storage_WorkListData";
import { Trash2 } from "lucide-react";
import { DeleteToDoList } from "./todoUtils";

export function CompletedWorkList() {
  const { completed , setCompleted } = useContext(WorkListData);

  return (
    <>
      <div className="space-y-3">
        {completed.map((items) => (
          <div
            key={items.id}
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
            <label className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
              <input
                type="text"
                className="
                w-5 h-5
                accent-cyan-500
                cursor-pointer
              "
                checked={items.completed}
                disabled={true}
              />

              <span className="text-white text-lg break-all" >{items.task}</span>
            </label>

            <div>
                 <button
              className="
                p-2 rounded-lg
                bg-red-500/20
                text-red-400
                hover:bg-red-500/30
                transition
              "
               onClick={() => DeleteToDoList(items.id, setCompleted)}
            >
              <Trash2 size={18} />
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
