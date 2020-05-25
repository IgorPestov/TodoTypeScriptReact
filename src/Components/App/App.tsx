import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import ItemAddFrom from "../ItemAddForm/ItemAddForm";
import {ITodo} from "../Interface/Interface";

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const AddHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
            edit: true,
            color: "#f7b0ff"
        }
        setTodos(prev => [newTodo, ...todos])
    }

    const onRemoveTask = (id: number) => {
        setTodos(prev => prev.filter(task => task.id !== id))
    }
    const onToggleTask = (id: number) => {
        setTodos(prev => prev.map(task => {
            if (task.id === id) {
                console.log(task.completed)
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        }))
    }
    const onDoubleTask = (id: number) => {
        setTodos(prev => prev.map(task => {
            if (task.id === id) {
                console.log(task.edit)

                return {
                    ...task,
                    edit: !task.edit
                }
            }

            return task

        }))
    }
    const taskEdit = (title : string, id: number) => {
        setTodos(prev => prev.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    title: title,
                    edit: !task.edit
                }
            } return task
        }))

    }



    return (
        <div>
            <TodoList
                onDouble={onDoubleTask}
                onToggle={onToggleTask}
                onRemove={onRemoveTask}
                taskEdit={taskEdit}
                // changeColor={changeColor}
                todos={todos}/>
            <ItemAddFrom onAdd={AddHandler}/>
        </div>
    )
}
export default App;
