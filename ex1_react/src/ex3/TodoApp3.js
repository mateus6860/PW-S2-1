import React, { useState, useEffect } from 'react';
import '../App.css';
import TodoListFilter from '../components/TodoListFilter';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function TodoApp3() {
  // Load tasks from localStorage or use an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  }

  function startEditing(index, text) {
    setEditingIndex(index);
    setEditText(text);
  }

  function updateTaskText(index) {
    if (editText.trim() !== "") {
      setTasks(tasks.map((task, i) =>
        i === index ? { ...task, text: editText } : task
      ));
    }
    setEditingIndex(null);
  }

  function filterTasks() {
    if (filter === "active") {
      return tasks.filter(task => !task.completed);
    } else if (filter === "finished") {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  }

  return (
    <div className="App3">
      <div className="TodoMatic3">
        <h1>Todo-List</h1>
        <h2>What needs to be done?</h2>
        <p>
          {tasks.filter(task => !task.completed).length} tasks remaining |{" "}
          {tasks.filter(task => task.completed).length} tasks completed
        </p>

        <TodoForm
          newTask={newTask}
          handleInputChange={handleInputChange}
          addTask={addTask}
        />

        <TodoListFilter setFilter={setFilter} />

        <TodoList
          tasks={filterTasks()}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditing={startEditing}
          editingIndex={editingIndex}
          editText={editText}
          setEditText={setEditText}
          updateTaskText={updateTaskText}
        />
      </div>
    </div>
  );
}

export default TodoApp3;
