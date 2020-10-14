import React, { useState } from 'react';
import ToDo from "./ToDo"
import ToDoAdd from "./ToDoAdd"
import { uuidGenerator } from "../utils"

function ToDoList() {
    const [list, handleList] = useState([{ text: "test", isDeleted: false, isCompleted: false, id: uuidGenerator() }, { text: "test2", isDeleted: false, isCompleted: false, id: uuidGenerator() }]);

    const removeFromList = (taskId) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == taskId) {
                console.log(list[i].isDeleted)
                const taskModified = {
                    id: list[i].id,
                    text: list[i].text,
                    isDeleted: true,
                    isCompleted: list[i].isCompleted
                }

                list.splice(i, 1)
                handleList([...list, taskModified])
            }
        }
    }

    const finishTask = (taskId) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == taskId) {
                console.log(list[i].isDeleted)
                const taskModified = {
                    id: list[i].id,
                    text: list[i].text,
                    isDeleted: list[i].isDeleted,
                    isCompleted: true
                }

                list.splice(i, 1)
                handleList([...list, taskModified])
            }
        }
    }

    return (
        <div>
            <ToDoAdd tasks={list} addTask={handleList} />
            {
                list.map((item, i) => (
                    !item.isDeleted ?
                        <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} key={i}></ToDo>
                        : ""
                ))
            }
        </div>
    )
}

export default ToDoList;