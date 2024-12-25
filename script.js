import React, { useState } from "https://cdn.jsdelivr.net/npm/react@17/umd/react.development.js";
import ReactDOM from "https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.development.js";

const TimetableApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", startTime: "08:00", endTime: "09:00", completed: false },
    { id: 2, title: "Task 2", startTime: "09:00", endTime: "10:00", completed: false },
    { id: 3, title: "Task 3", startTime: "10:00", endTime: "11:00", completed: false },
    { id: 4, title: "Task 4", startTime: "11:00", endTime: "12:00", completed: false },
    { id: 5, title: "Task 5", startTime: "12:00", endTime: "13:00", completed: false },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");

  const handleToggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTitle(task.title);
    setNewStartTime(task.startTime);
    setNewEndTime(task.endTime);
  };

  const handleSaveTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, startTime: newStartTime, endTime: newEndTime }
          : task
      )
    );
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 rounded-lg shadow-md text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Daily Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between py-2 border-b border-gray-700">
            {editingTask === task ? (
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="px-2 py-1 border border-gray-700 rounded-lg mb-2 bg-gray-800 text-gray-200"
                />
                <div className="flex justify-between">
                  <input
                    type="time"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="px-2 py-1 border border-gray-700 rounded-lg bg-gray-800 text-gray-200"
                  />
                  <input
                    type="time"
                    value={newEndTime}
                    onChange={(e) => setNewEndTime(e.target.value)}
                    className="px-2 py-1 border border-gray-700 rounded-lg bg-gray-800 text-gray-200"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleSaveTask(task.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-2 py-1 bg-gray-700 text-gray-200 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleCompleted(task.id)}
                    className="mr-2"
                  />
                  <span className={`text-lg ${task.completed ? "text-gray-400 line-through" : "text-gray-200"}`}>{task.title}</span>
                </div>
                <span className="text-lg text-gray-200">{task.startTime} - {task.endTime}</span>
                <button
                  onClick={() => handleEditTask(task)}
                  className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<TimetableApp />, document.getElementById("root"));
