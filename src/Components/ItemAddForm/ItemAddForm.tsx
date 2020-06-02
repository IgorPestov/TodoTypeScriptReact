import React, {useState} from "react";
import {ITodoTitle} from "../Interface/Interface";

import './ItemAddForm.css'

const ItemAddFrom: React.FC<ITodoTitle> = (props) => {
    const [color, setColor] = useState<string>('rgb(0, 255, 200)');
    const [todo, setTodo] = useState<any>("")


    const createTodo = () => {
        colorRandom();
        props.createTodoFunc(color, todo)
        setTodo('')
    }

    const keyPressAdd = (event: React.KeyboardEvent) => {

        if (event.key === 'Enter') {
            if (todo === '') {
                return false
            }
            colorRandom();
            props.createTodoFunc(color, todo);
            setTodo('');
        }
    }

    const colorRandom = () => {
        const rad = document.getElementsByName('choice-color')
        const getRandomArbitrary = ( max: number) => {
            return  Math.floor(Math.random() * Math.floor(max));
        }
        let i = getRandomArbitrary(5)
        setColor(rad[i].style.background)
    }


    return (
        <div className='item-add-form'>
            <input type='text'
                   placeholder='Enter task'
                   value={todo}
                   onChange={({target}) => setTodo(target.value)}
                   onKeyPress={keyPressAdd}
                   className='input-add-text'
            />
            <input className='button-add' onClick={createTodo} type='button' value='Add'/>

        </div>
    )
}

export default ItemAddFrom;