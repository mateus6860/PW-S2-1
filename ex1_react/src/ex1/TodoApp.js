import React, { useState } from 'react';
import '../App.css';
import TodoListFilter from '../components/TodoListFilter';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

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
    <>
      <div className="TodoMatic">
        <h1>Todo-List</h1>
        <h2>What needs to be done?</h2>
        <p>{tasks.filter(task => !task.completed).length} tasks remaining</p>

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
    </>
  );
}

export default TodoApp;
