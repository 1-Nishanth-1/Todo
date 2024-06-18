import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAddCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export const TodoForm = ({
  settodoArray,
  todoArray,
  editStatus,
  seteditStatus,
  editId,
  inputText,
  setinputText,
}) => {
  //Chagning inputText
  const changeTextInput = (event) => {
    setinputText(event.target.value);
  };

  //Adding Task to List
  const addTask = (id, event) => {
    event.preventDefault();
    if (editStatus) {
      settodoArray(
        todoArray.map((item) => {
          if (item.id === id) {
            return { ...item, task: inputText };
          } else {
            return item;
          }
        })
      );
      seteditStatus(false);
      setinputText("");
    } else {
      settodoArray([...todoArray, { task: inputText, id: uuidv4() }]);
      setinputText("");
    }
  };

  return (
    <div className="form">
      <form onSubmit={(event) => addTask(editId, event)}>
        <input
          className="inputBox"
          type="text"
          value={inputText}
          placeholder="Enter Task"
          onChange={changeTextInput}
          required
        ></input>
        <button type="submit" className="buttonSubmit">
          {editStatus ? <CiEdit /> : <IoAddCircle />}
        </button>
      </form>
    </div>
  );
};
