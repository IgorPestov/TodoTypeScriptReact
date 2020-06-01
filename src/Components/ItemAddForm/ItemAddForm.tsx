import React, { useState} from "react";
import {ITodoTitle} from "../Interface/Interface";

import './ItemAddForm.css'

const ItemAddFrom: React.FC<ITodoTitle> = (props) => {

    const [color, setColor] = useState<string>('rgb(247, 176, 255)');
    const [todo, setTodo] = useState<any>("")

    const createTodo = () => {
        props.createTodoFunc(color,todo)
        setTodo('')
    }

    const keyPressAdd = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (todo === '') {
                return false
            }

            props.createTodoFunc(color,todo)
            setTodo('')

        }
    }

    const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.currentTarget.style.background);
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
            <div className='radio'>
                <input type='radio'
                       id='1'
                       value='1'
                       name='choice-color'
                       defaultChecked={true}
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#f7b0ff"}}
                />
                <label htmlFor='1'
                       className='label-radio'
                       style={{background: "#f7b0ff"}}> </label>
                <input type='radio' id='2'
                       value='2'
                       name='choice-color'
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#ff7a62"}}/>
                <label htmlFor='2'
                       className='label-radio'
                       style={{background: "#ff7a62"}}> </label>
                <input type='radio' id='3'
                       value='3'
                       name='choice-color'
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#58996e"}}/>
                <label htmlFor='3'
                       className='label-radio'
                       style={{background: "#58996e"}}> </label>
                <input type='radio' id='4'
                       value='4'
                       name='choice-color'
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#00ffc8"}}/>
                <label htmlFor='4'
                       className='label-radio'
                       style={{background: "#00ffc8"}}> </label>
                <input type='radio'
                       id='5'
                       value='5'
                       name='choice-color'
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#b4c2ff"}}/>
                <label htmlFor='5'
                       className='label-radio'
                       style={{background: "#b4c2ff"}}> </label>
                <input type='radio'
                       id='6'
                       value='6'
                       name='choice-color'
                       className='radio active'
                       onChange={onChangeRadio}
                       style={{background: "#99ffab"}}/>
                <label htmlFor='6'
                       className='label-radio'
                       style={{background: "#99ffab"}}> </label>


            </div>
            <input className='button-add' onClick={createTodo} type='button' value='Add'/>

        </div>
    )
}

export default ItemAddFrom;