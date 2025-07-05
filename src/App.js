import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask === "") return alert("Task cannot be empty");

    setTasks(prev => [...prev, trimmedTask]);
    setNewTask("");
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add Task</button>
      </div>

      <div style={styles.taskList}>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleClearAll} style={styles.clearButton}>Clear All</button>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial"
  },
  inputContainer: {
    marginBottom: "20px"
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "200px"
  },
  button: {
    padding: "8px 16px",
    marginLeft: "10px",
    fontSize: "16px",
    cursor: "pointer"
  },
  clearButton: {
    marginTop: "20px",
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer"
  },
  taskList: {
    minHeight: "100px"
  }
};

export default App;
// This code defines a simple Todo List application using React.