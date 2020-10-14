import React, { useState } from 'react';
import ToDo from "./ToDo"
import ToDoAdd from "./ToDoAdd"
import ReCount from "./ReCount"
import { uuidGenerator } from "../utils"

function ToDoList() {
    const [list, handleList] = useState([{ text: "Quiero trabajar", isDeleted: false, isCompleted: false, id: uuidGenerator() }, { text: "en celerik :)", isDeleted: false, isCompleted: false, id: uuidGenerator() }]);

    /**
     * 
     * @param {*} taskId 
     * One way to modify the list in state, with for
     */
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

    /**
     * 
     * @param {*} taskId 
     * Second way to modify the list in state, with map
     */
    const finishTask = (taskId) => {
        let newList = []
        list.map(item => {
            if (item.id == taskId) {
                let newItem = {
                    id: item.id,
                    text: item.text,
                    isDeleted: item.isDeleted,
                    isCompleted: true
                }
                newList.push(newItem)
            } else {
                newList.push(item);
            }
            handleList(newList)
        })
    }

    const editTask = (taskId, text) => {
        let newList = []
        list.map(item => {
            if (item.id == taskId) {
                let newItem = {
                    id: item.id,
                    text: text,
                    isDeleted: item.isDeleted,
                    isCompleted: item.isCompleted
                }
                newList.push(newItem)
            } else {
                newList.push(item);
            }
            handleList(newList)
        })
    }

    return (
        <div>
            <ToDoAdd tasks={list} addTask={handleList} />
            {
                list.map((item, i) => (
                    !item.isDeleted ?
                        <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i}></ToDo>
                        : ""
                ))
            }
            <ReCount/>
        </div>
    )
}

export default ToDoList;