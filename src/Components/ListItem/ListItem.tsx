import React, { useState} from "react";
import { ITodoListProps} from "../Interface/Interface";

import './ListItem.css'


const ListItem: React.FC<ITodoListProps> = ({todos, onRemove, onToggle, onDouble, taskEdit, changeColor}) => {
    const [todo, setTodo] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)

    const Radio = [
        {type: 'radio',
        id: [1, 2, 3, 4, 5],
        value: [1, 2, 3, 4, 5],
        name: 'choice-color',
        className: 'radio active',
        style: ["pink", 'orange', 'green', 'bright-turquoise', 'light-purple', 'light-green'] }
    ]

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


    const changeColors = (event: any) => {
        console.log(todos)
        console.log(Radio.map(task => task.id))
        changeColor(event.target.style.background)
    }

    return (
        <div>
            <div>
                {todos.map(task => {
                    const classes = ['todo']

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
                                    checked={task.editColor}
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


                <div className='radio'>

                    <input type='radio'
                           id='1'
                           value='1'
                           name='choice-color'
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#f7b0ff"}}/>
                    <label htmlFor='1'
                           className='label-radio'
                           style={{background: "#f7b0ff"}}> </label>
                    <input type='radio' id='2'
                           value='2'
                           name='choice-color'
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#ff7a62"}}/>
                    <label htmlFor='2'
                           className='label-radio'
                           style={{background: "#ff7a62"}}> </label>
                    <input type='radio' id='3'
                           value='3'
                           name='choice-color'
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#58996e"}}/>
                    <label htmlFor='3'
                           className='label-radio'
                           style={{background: "#58996e"}}> </label>
                    <input type='radio' id='4'
                           value='4'
                           name='choice-color'
                           defaultChecked={true}
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#00ffc8"}}/>
                    <label htmlFor='4'
                           className='label-radio'
                           style={{background: "#00ffc8"}}> </label>
                    <input type='radio'
                           id='5'
                           value='5'
                           name='choice-color'
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#b4c2ff"}}/>
                    <label htmlFor='5'
                           className='label-radio'
                           style={{background: "#b4c2ff"}}> </label>
                    <input type='radio'
                           id='6'
                           value='6'
                           name='choice-color'
                           className='radio active'
                           onClick={changeColors}
                           style={{background: "#99ffab"}}/>
                    <label htmlFor='6'
                           className='label-radio'
                           style={{background: "#99ffab"}}> </label>
                </div>
            </div>

        </div>
    )
}

export default ListItem;