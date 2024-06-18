import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todolist } from "./Todolist";
export const Todo = () => {
  const [todoArray, settodoArray] = useState([]);
  const [editStatus, seteditStatus] = useState(false);
  const [editId, seteditId] = useState(null);
  const [inputText, setinputText] = useState("");
  return (
    <>
      <TodoForm
        settodoArray={settodoArray}
        todoArray={todoArray}
        editStatus={editStatus}
        seteditStatus={seteditStatus}
        editId={editId}
        inputText={inputText}
        setinputText={setinputText}
      />
      <Todolist
        settodoArray={settodoArray}
        todoArray={todoArray}
        seteditStatus={seteditStatus}
        seteditId={seteditId}
        setinputText={setinputText}
      />
    </>
  );
};
