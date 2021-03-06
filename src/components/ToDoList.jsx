import React, { useState } from "react";
import ToDo from "./ToDo"
import ToDoAdd from "./ToDoAdd"
import ReCount from "./ReCount"
import { uuidGenerator } from "../utils"
import { useSelector } from "react-redux"

function ToDoList() {
    const [list, handleList] = useState([{ text: "quiero trabajar", isDeleted: false, isCompleted: false, id: uuidGenerator() }, { text: "en celerik :)", isDeleted: false, isCompleted: false, id: uuidGenerator() }]);

    /**
     * 
     * @param {*} taskId 
     * One way to modify the list in state, with for
     */
    function removeFromList(taskId) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === taskId) {
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
    function finishTask(taskId) {
        let newList = []
        list.map(item => {
            if (item.id === taskId) {
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
            return newList;
        })
    }

    function editTask(taskId, text) {
        let newList = []
        list.map(item => {
            if (item.id === taskId) {
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
            handleList(newList);
            return newList;
        })
    }

    const filterByText = useSelector(state => state.filters.filterText);
    const filterByType = useSelector(state => state.filters.filterType);

    const filterChecker = () => {
        if (filterByText.length >= 3) {
            const newList = list.filter(task => task.text.includes(filterByText));
            if (filterByType === "Eliminados") {
                return (
                    newList.filter(task => task.isDeleted === true).map((item, i) => (
                        <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                    ))
                )
            } else if (filterByType === "Completados") {
                return (
                    newList.filter(task => task.isCompleted === true).map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            } else if (filterByType === "Incompletos") {
                return (
                    newList.filter(task => task.isCompleted !== true).map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            } else {
                return (
                    newList.map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            }
        } else {
            if (filterByType === "Eliminados") {
                return (
                    list.filter(task => task.isDeleted === true).map((item, i) => (
                        <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                    ))
                )
            } else if (filterByType === "Completados") {
                return (
                    list.filter(task => task.isCompleted === true).map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            } else if (filterByType === "Incompletos") {
                return (
                    list.filter(task => task.isCompleted !== true).map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            } else {
                return (
                    list.map((item, i) => (
                        !item.isDeleted ?
                            <ToDo text={item.text} isDeleted={item.isDeleted} isCompleted={item.isCompleted} uuid={item.id} removeTask={removeFromList} finishTask={finishTask} editTask={editTask} key={i} />
                            : ""
                    ))
                )
            }
        }
    }

    return (
        <div>
            <ToDoAdd tasks={list} addTask={handleList} />
            {
                filterChecker()
            }
            <ReCount tasks={list} />
        </div>
    )
}



export default ToDoList;