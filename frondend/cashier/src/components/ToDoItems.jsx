const ToDoItem = ({ text, isComplete, id, toggle,deletetodo }) => {
  return (
    <div className="flex my-2 justify-between items-center gap-2">
      <label className={`p-2 hover:bg-slate-200 cursor-pointer flex-1 select-none 
          ${isComplete ? "line-through" : "" }`}>
        {text}
      </label>
      <div>
        <svg
          className="hover:fill-red-900 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          aria-label="Delete"
          onClick={() => deletetodo(id)} 
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          onClick={() => toggle(id)} // Fix: Use an arrow function to pass the id
        >
          <path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm0 113L42-466l169-170 170 170 366-367 172 168-538 538Z" />
        </svg>
      </div>
    </div>
  );
};

export default ToDoItem;
