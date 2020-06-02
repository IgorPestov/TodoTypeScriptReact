import React, {useEffect, useState} from 'react';
import TodoList from "../TodoList/TodoList";
import ItemAddFrom from "../ItemAddForm/ItemAddForm";
import {ITodo} from "../Interface/Interface";
import APIHelper from "../../APIHelper";

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    const [todo, setTodo] = useState<any>("")


    useEffect(() => {

        const fetchTodoAndSetTodos = async () => {
            const todos = await APIHelper.getAllTodos()
            setTodos(todos)
        }

        fetchTodoAndSetTodos()
    }, [])

    const createTodo = async (color: string, todo: string) => {
        if(!todo) {
            return
        }
        if(todos.some(({task}:any) =>task === todo)) {
            return <div><span>The task is already there</span></div>
        }
        const newTodo = await APIHelper.createTodo(todo, color)
        setTodos([...todos, newTodo])

        setTodo('')


    }

    const onToggleTask = async (_id: string) => {

        try {
            await APIHelper.updateTodo(_id)
            const complete: any = todos.find(task => task._id === _id)
            const payload = {
                editColor: !complete.editColor
            }
            const updateTodo = await APIHelper.updateTodo(_id, payload)
            setTodos(todos.map(todo => (todo._id === _id ? updateTodo : todo)))

        } catch (err) {
        }
    }
    const onDoubleTask = async (_id: string) => {
        try {
            await APIHelper.updateTodo(_id)
            const edit: any = todos.find(todo => todo._id === _id)
            const payload = {
                edit: !edit
            }
            const updatedTodo = await APIHelper.updateTodo(_id, payload)
            setTodos(todos.map(todo => (todo._id === _id ? updatedTodo : todo)))
        } catch (err) {
        }
    }
    const taskEdit = async (todo: string, _id: string, edit: boolean) => {
        try {
            await APIHelper.updateTodo(_id)
            const payload = {
                task: todo,
                edit: edit,
            }
            await APIHelper.updateTodo(_id, payload)
            // setTodos((todos.map(todo => todo._id === _id ? updateTodo : todo)))
            const todos = await APIHelper.getAllTodos()
            setTodos(todos)
        } catch (err) {
        }
    }
    const deleteTodo = async (_id: string) => {
        try {
            await APIHelper.deleteTodo(_id)
            setTodos(todos.filter(({_id: i}) => _id !== i))
        } catch (err) {
        }
    }
    const changeColor = async (color: string) => {
         const b = todos.filter(task => task.editColor > false)
        if (b.length) {
            b.map( async  task => {
                try {
                    await APIHelper.updateTodo(task._id)
                    const payload = {
                        color: color,
                    }
                    await APIHelper.updateTodo(task._id, payload)
                    const todos = await APIHelper.getAllTodos()
                    setTodos(todos)
                } catch (err) {}
            })
        }
    }
    return (
        <div className='container'>
            <TodoList
                changeColor={changeColor}
                onDouble={onDoubleTask}
                onToggle={onToggleTask}
                onRemove={deleteTodo}
                taskEdit={taskEdit}
                todos={todos}/>
            <ItemAddFrom
                createTodoFunc={createTodo}/>
        </div>
    )
}
export default App;
