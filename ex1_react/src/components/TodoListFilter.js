import React from 'react';

function TodoListFilter({ setFilter }) {
  return (
    <div className="filter-section">
      <button type="button" onClick={() => setFilter("all")}>All</button>
      <button type="button" onClick={() => setFilter("active")}>Active</button>
      <button type="button" onClick={() => setFilter("finished")}>Finished</button>
    </div>
  );
}

export default TodoListFilter;
