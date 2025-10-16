import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory("Code");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-text">Details</label>
      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task details"
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
