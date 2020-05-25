import React, {useRef, useState} from "react";
import {ITodoTitle} from "../Interface/Interface";

import './ItemAddForm.css'

const ItemAddFrom: React.FC<ITodoTitle> = (props) => {

    const [title, setTitle] = useState<string>('')
    const [color, setColor] = useState<string>('')
    const keyPressAdd = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
                        if(title === '') { return false}

                props.onAdd(title)
                setTitle('')

            }
        }
        const onClickAdd = (event : React.MouseEvent) => {
            if(title === '') { return false}
            props.onAdd(title)

            setTitle('');
        }
        const changeAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value)
        }

        const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {

        }

        return (
            <div>
                <input type='text'
                       onChange={changeAdd}
                       placeholder='Enter task'
                       value={title}
                       onKeyPress={keyPressAdd}
                />
                <div>
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
                <input onClick={onClickAdd} type='button' value='Add'/>

            </div>
        )
    }

    export default ItemAddFrom;