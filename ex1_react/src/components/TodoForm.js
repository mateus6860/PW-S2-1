import React from 'react';

function TodoForm({ newTask, handleInputChange, addTask }) {
  return (
    <div>
      <input
        className="input-box"
        type="text"
        placeholder='Enter new task...'
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="button-add-task" type="submit" onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoForm;
