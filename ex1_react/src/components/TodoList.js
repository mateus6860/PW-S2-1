import React from 'react';

function TodoList({ tasks, toggleTask, deleteTask, startEditing, editingIndex, editText, setEditText, updateTaskText }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            className="input-checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          {editingIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => updateTaskText(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateTaskText(index);
                }
              }}
              autoFocus
            />
          ) : (
            <label>{task.text}</label>
          )}
          <button className="button-edit" type="button" onClick={() => startEditing(index, task.text)}>Edit</button>
          <button className="button-delete" type="button" onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;
