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
        // if(!todo) {
        //     return
        // }
        // if(todos.some(({task}:any) =>task === todo)) {
        //     return <div><span>The task is already there</span></div>
        // }
        const newTodo = await APIHelper.createTodo(todo, color)
        setTodos([...todos, newTodo])

        setTodo('')


    }

    const onToggleTask = async (_id: string) => {
        try {
            await APIHelper.updateTodo(_id)
            const complete: any = todos.find(todo => todo._id === _id)
            const payload = {
                completed: !complete.completed,

            }
            const updateTodo = await APIHelper.updateTodo(_id, payload)
            setTodos(todos.map(todo => (todo._id === _id ? updateTodo : todo)))
        } catch (err) {}
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
        } catch (err) {}

    }
    const taskEdit = async (todo: string, _id: string, edit: boolean) => {

        try {
            await APIHelper.updateTodo(_id)
            const payload = {
                task: todo,
                edit: edit,
            }
            const updateTodo = await APIHelper.updateTodo(_id, payload)
            setTodos((todos.map(todo => todo._id === _id ? updateTodo : todo)))


        } catch (err) { }

    }
    const deleteTodo = async (_id: string) => {
        try {

            await APIHelper.deleteTodo(_id)

            setTodos(todos.filter(({_id: i}) => _id !== i))

        } catch (err) {
        }
    }


    return (
        <div className='container'>
            <TodoList
                onDouble={onDoubleTask}
                onToggle={onToggleTask}
                onRemove={deleteTodo}
                taskEdit={taskEdit}
                todos={todos}/>
            <ItemAddFrom createTodoFunc={createTodo}/>
        </div>
    )
}
export default App;
