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

  //priority up
  const priorityUp = (item1) => {
    let count = 0;
    settodoArray(
      todoArray.map((item2) => {
        if (item1 === item2) {
          count++;
          return;
        } else if (count === 1) {
          return item2;
          count++;
        } else if (count == 2) {
          return item1;
          count++;
        } else {
          return item2;
        }
      })
    );
  };
  const priorityDown = (item) => {
    const x = todoArray.indexOf(item);
    [todoArray[x], todoArray[x - 1]] = [todoArray[x - 1], todoArray[x]];
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
            <span onClick={() => priorityUp(item)}>
              <FaArrowUp />
            </span>
            <span onClick={() => priorityDown(item)}>
              <FaArrowDown />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
