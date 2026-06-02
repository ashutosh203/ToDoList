import { v4 as uuidv4 } from "uuid";

// this is a add goal button function.
export function addGoals(toDo, setToDo, setWorkList, editId, setEditId) {
  if (toDo.trim() === "") {
    setToDo("");
    return undefined;
  } else if (editId) {
    setWorkList((prev) =>
      prev.map((item) => (item.id === editId ? { ...item, task: toDo } : item)),
    );
    setEditId(null);
  } else {
    setWorkList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        task: toDo.trim().toUpperCase(),
        completed: false,
      },
    ]);
  }
  setToDo("");
}

// this is a delete button function.
export function DeleteToDoList(id, setWorkList) {
  setWorkList((prev) => prev.filter((e) => e.id !== id));
}

export function EditToDoList(id, workList, setToDo, setEditId, inputRef) {
  const items = workList.find((e) => e.id === id);
  if (items) {
    setToDo(items.task);
    setEditId(id);
    inputRef.current?.focus();
  }
}

export function completeTask(id, setWorkList, setCompleted, workList) {
  const completedItems = workList.find((e) => e.id === id);
  setCompleted((prev) => [...prev, { ...completedItems, completed: true }]);
  setWorkList((prev) =>
    prev
      .map((item) => (item.id === id ? { ...item, completed: true } : item))
      .filter((items) => items.id !== id),
  );
}