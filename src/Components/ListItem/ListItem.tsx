import React, {useState} from "react";
import {ITodoListProps} from "../Interface/Interface";

import './ListItem.css'


const ListItem: React.FC<ITodoListProps> = ({
                                                todos,
                                                onRemove,
                                                onToggle,
                                                onDouble,
                                                taskEdit
                                            }) => {
    const [title, setTitle] = useState<string>('')
    const [id, setId] = useState<number>(0)
    const onKeyPressEdit = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
             taskEdit(title, id)
            setTitle('')
        }
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setId(Number(event.target.id))
        setTitle (event.target.value)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(event.target.id))
        setTitle (event.target.value)


    }

    return (
        <div>
            {todos.map(task => {
                const classes = ['todo']
                const classesEdit = ['todo']

                if (task.completed) {
                    classes.push('completed')
                }
                if (task.edit) {
                    classesEdit.push('edit')
                }
                return (
                    <li key={task.id}
                        className={classes.join(' ')}
                    style={{background: `${task.color}`}}>
                        <input type='checkbox'
                               checked={task.completed}
                               onChange={onToggle.bind(null, task.id)}
                               />
                        <input type='text'
                               id={`${task.id}`}
                               value={title}
                               onKeyPress={onKeyPressEdit}
                               onChange={onChange}
                               onBlur={onBlur}
                               className={classesEdit.join(' ')}/>
                        <span
                            // className={classesEdit.join(' ')}
                            onDoubleClick={onDouble.bind(null, task.id)}>{task.title}</span>
                        <button
                            onClick={() => onRemove(task.id)}>
                            Delete
                        </button>
                    </li>
                )
            })}

        </div>
    )
}

export default ListItem;