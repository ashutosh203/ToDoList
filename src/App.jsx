import { CompletedWorkList } from "./To-Do-List/ComplitedWorkList";
import Inputfield from "./To-Do-List/Inputfield";
import WorkListDetails from "./To-Do-List/WorkListDetails";
import { WorkListDataProvider } from "./ToDoContextStore/Storage_WorkListData";

function App() {
  return (
    <WorkListDataProvider>
      <div className="min-h-screen bg-slate-950 text-white flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl mb-6">
            <h1 className="text-4xl font-bold text-center bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Today's Goals
            </h1>

            <p className="text-center text-slate-400 mt-2">
              Stay focused and achieve more every day.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl mb-6">
            <Inputfield />
          </div>

          {/* Goals List */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Goal List 📋</h2>

            <WorkListDetails />
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl mt-5">
            <h2 className="text-xl font-semibold mb-4">Goal Completed 📋</h2>
            <CompletedWorkList />
          </div>
        </div>
      </div>
    </WorkListDataProvider>
  );
}

export default App;
