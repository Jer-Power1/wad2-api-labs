import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input type="text" name="title" required onChange={(e) => props.change(e)} />
        </label>
        <br />
        <label>
          Due date:
          <input type="date" name="deadline" required onChange={(e) => props.change(e)} />
        </label>
        <br />
        <label>
          Details:
          <input type="text" name="description" onChange={(e) => props.change(e)} />
        </label>
        <br />
        <label>
          Priority:
          <select name="priority" defaultValue="low" onChange={(e) => props.change(e)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
