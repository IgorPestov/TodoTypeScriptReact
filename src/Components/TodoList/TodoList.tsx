import React from "react";
import ListItem from "../ListItem/ListItem";
import {ITodoListProps} from "../Interface/Interface";

import './TodoList.css'

const TodoList: React.FC<ITodoListProps> = ({todos,onRemove,onToggle,onDouble, taskEdit}) => {

    return (
        <div>
            <ul className='list-item'>
                <ListItem
                    taskEdit={taskEdit}
                    onDouble={onDouble}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    todos={todos}/>
            </ul>
        </div>
    )
}

export default TodoList;