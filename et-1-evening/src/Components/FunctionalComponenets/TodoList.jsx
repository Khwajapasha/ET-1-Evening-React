import React, { useState } from "react";
export const TodoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleClick = () => {
    setData([...data, text]);
    document.getElementById("myInput").value = "";
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        id="myInput"
      />
      <button onClick={handleClick}>Add</button>
      {data.map((elements) => {
        return (
          <>
            <p>{elements}</p>
          </>
        );
      })}
    </div>
  );
};
