import React from 'react';

const Task = ({ title, deadline, description, priority, done, markDone, deleteTask }) => {
  return (
    <div className={`card ${priority ? `prio-${priority.toLowerCase()}` : ""}`}
         style={{ backgroundColor: done ? 'lightgrey' : '#5bb4c4' }}>
      <p className="title">{title}</p>
      <p>Due: {deadline}</p>
      {description && <p className="desc">{description}</p>}
      {priority && (
        <p className={`priority ${priority.toLowerCase()}`}>
          {priority && (
  <div className={`badge ${priority.toLowerCase()}`}>
    {priority.charAt(0).toUpperCase() + priority.slice(1)}
  </div>
)}

        </p>
      )}

      <button onClick={markDone} className="doneButton">Done</button>
      <button onClick={deleteTask} className="deleteButton">Delete</button>
    </div>
  );
};



export default Task;
