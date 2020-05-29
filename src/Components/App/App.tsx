import React, {useEffect, useState} from 'react';
import TodoList from "../TodoList/TodoList";
import ItemAddFrom from "../ItemAddForm/ItemAddForm";
import {ITodo} from "../Interface/Interface";
import APIHelper from "../../APIHelper";

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect( () => {
        const fetchTodoAndSetTodos = async () =>{
            const todos = await  APIHelper.getAllTodos()
            setTodos(todos)
        }
        fetchTodoAndSetTodos()
    }, [])

    // const AddHandler = (title: string, color: string,) => {
    //     const newTodo: ITodo = {
    //         title: title,
    //         _id: {},
    //         completed: false,
    //         edit: true,
    //         color: color
    //     }
    //     setTodos(prev => [newTodo, ...todos])
    // }

    // const onRemoveTask = (id: number) => {
    //     setTodos(prev => prev.filter(task => task.id !== id))
    // }
    // const onToggleTask = (id: number) => {
    //     setTodos(prev => prev.map(task => {
    //         if (task.id === id) {
    //             console.log(task.completed)
    //             return {
    //                 ...task,
    //                 completed: !task.completed
    //             }
    //         }
    //         return task
    //     }))
    // }
    // const onDoubleTask = (id: number) => {
    //     setTodos(prev => prev.map(task => {
    //         if (task.id === id) {
    //
    //             return {
    //                 ...task,
    //                 edit: !task.edit,
    //             }
    //         }
    //
    //         return task
    //
    //     }))
    // }
    // const taskEdit = (title : string, id: number, edit: boolean) => {
    //     setTodos(prev => prev.map(task => {
    //
    //         if(task.id === id) {
    //
    //             return {
    //                 ...task,
    //                 title: title,
    //                 edit: edit,
    //             }
    //
    //         } return task
    //
    //     }))
    //
    // }
    const deleteTodo = async (e:any, id: any) => {
        try {
            e.stopPropagation()
            await APIHelper.deleteTodo(id)

            setTodos(todos.filter(({_id: i}) => id !== i))

        } catch (err) {
        }
    }


    return (
        <div className='container'>
            {/*<TodoList*/}
            {/*    onDouble={onDoubleTask}*/}
            {/*    onToggle={onToggleTask}*/}
            {/*    onRemove={onRemoveTask}*/}
            <ul>
                {todos.map(({_id, task, completed}, i) => (
                    <li
                        key={i}
                        // onDoubleClick={e => updateTodo(e, _id)}
                        className={completed ? "completed" : ""}
                    >
                        {task} <span onClick={e => deleteTodo(e, _id)}>X</span>
                    </li>
                ))}
            </ul>
            {/*    taskEdit={taskEdit}*/}
            {/*    // changeColor={changeColor}*/}
            {/*    todos={todos}/>*/}
            <ItemAddFrom />
            {/*<ItemAddFrom onAdd={AddHandler}/>*/}
        </div>
    )
}
export default App;
