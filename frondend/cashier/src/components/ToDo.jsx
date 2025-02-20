import React, { useState } from "react";
import ToDoItem from "./ToDoItems";

const ToDo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Learn Books",
      isComplete: true,
    },
  ]);

  const [taskText, setTaskText] = useState("");

  // Handler to add a new task
  const handleAddTask = () => {
    if (taskText.trim() === "") return; // Prevent adding empty tasks
    const newTask = {
      id: Date.now(),
      text: taskText,
      isComplete: false, // Default to incomplete
    };
    setTodoList([...todoList, newTask]);
    setTaskText(""); // Clear input
  };

  // Toggle task completion
  const toggle = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  //delete todo
  const deletetodo=(id)=>{
    setTodoList((prevTodoList)=>{
      return  prevTodoList.filter((todo)=>todo.id!==id);
  });
}

  return (
    <div className="w-[30rem]">
      <h1 className="text-lg my-2 font-medium text-amber-700">ToDo List</h1>
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter your task"
            className="px-4 py-3 w-full text-sm border focus:outline-none focus:border-amber-500"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
        </div>
        <button
          className="text-white px-4 py-3 bg-blue-500 hover:bg-blue-900 border-none rounded-sm font-medium"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <p className="my-2 text-zinc-400">List Details</p>

      <div className="w-[30rem] bg-white px-4 py-6 shadow">
        <fieldset>
          <legend className="text-pink-500 font-medium">Task List</legend>
          {todoList.length === 0 ? (
            <p>No Tasks Found</p>
          ) : (
            todoList.map((todo) => (
              <ToDoItem
                text={todo.text}
                key={todo.id}
                isComplete={todo.isComplete}
                id={todo.id}
                toggle={toggle}
                deletetodo={deletetodo}
              />
            ))
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default ToDo;
