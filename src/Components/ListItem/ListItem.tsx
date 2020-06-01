import React, {useState} from "react";
import {ITodoListProps} from "../Interface/Interface";

import './ListItem.css'


const ListItem: React.FC<ITodoListProps> = ({todos, onRemove, onToggle, onDouble, taskEdit}) => {
    const [todo, setTodo] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)


    const onKeyPressEdit = (event: any) => {

        if (event.key === 'Enter') {

            taskEdit(todo, id, edit)

        }


    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.id)
        setTodo(event.target.value)
        setEdit(true)


    }
    const onBlur = () => {

        setTodo('')
        taskEdit(todo, id, edit)

    }


    return (
        <div>
            {todos.map(task => {
                const classes = ['todo']

                if (task.completed) {
                    classes.push('completed')
                }
                if (!task.edit) {
                    classes.push('edit')
                }

                return (
                    <li key={task._id}
                        className={classes.join(' ')}
                        style={{background: `${task.color}`}}>
                        <label
                            htmlFor={`${task._id}`}
                            className='span-checkbox'>
                            <input
                                type='checkbox'
                                id={`${task._id}`}
                                checked={task.completed}
                                onChange={() => onToggle(task._id)}
                                className='checkbox'
                            /> </label>
                        <span className='span'>
                            <input
                                style={{background: `${task.color}`}}
                                type='text'
                                id={`${task._id}`}
                                value={todo}
                                onKeyPress={onKeyPressEdit}
                                onBlur={onBlur}
                                onChange={onChange}
                                className='edit'/>
                        <span
                            className='item'
                            onDoubleClick={() => onDouble(task._id)}
                        >
                            {task.task}</span>
                        <button
                            className='button-delete'
                            onClick={() => onRemove(task._id)}
                        >
                            Delete
                        </button> </span>

                    </li>
                )
            })}

        </div>
    )
}

export default ListItem;