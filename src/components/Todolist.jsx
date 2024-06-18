import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
export const Todolist = ({
  settodoArray,
  todoArray,
  seteditStatus,
  seteditId,
  setinputText,
}) => {
  //Delet Task
  const deleteTask = (id) => {
    settodoArray(todoArray.filter((item) => item.id !== id));
  };
  //change edit vales
  const editTask = (item) => {
    seteditStatus(true);
    seteditId(item.id);
    setinputText(item.task);
  };
  return (
    <div>
      <ol>
        {todoArray.map((item) => (
          <li key={item.id} className="List">
            {item.task}
            <span onClick={() => editTask(item)}>
              <CiEdit />
            </span>
            <span onClick={() => deleteTask(item.id)}>
              <MdDelete />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
