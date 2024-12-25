import React, { useState } from 'react';

interface Task {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  completed: boolean;
}

const TimetableApp = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Task 1', startTime: '08:00', endTime: '09:00', completed: false },
    { id: 2, name: 'Task 2', startTime: '09:00', endTime: '10:00', completed: false },
    { id: 3, name: 'Task 3', startTime: '10:00', endTime: '11:00', completed: false },
    { id: 4, name: 'Task 4', startTime: '11:00', endTime: '12:00', completed: false },
    { id: 5, name: 'Task 5', startTime: '12:00', endTime: '13:00', completed: false },
  ]);

  const handleTaskCompletion = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Daily Task Timetable</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
                className="mr-2"
              />
              <span className="text-lg">{task.name}</span>
            </div>
            <div className="text-lg">
              {task.startTime} - {task.endTime}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimetableApp;
