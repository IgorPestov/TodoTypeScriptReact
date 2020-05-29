import React, { useState} from "react";
// import {ITodoListProps} from "../Interface/Interface";
//
// import './ListItem.css'
//
//
// const ListItem: React.FC<ITodoListProps> = ({todos, onRemove, onToggle, onDouble, taskEdit}) => {
//     const [title, setTitle] = useState<string>('')
//     const [id, setId] = useState<number>(0)
//     const [edit, setEdit] = useState<boolean>(true)
//
//     const onKeyPressEdit = (event: any) => {
//
//         if (event.key === 'Enter') {
//             taskEdit(title, id,edit)
//             console.log('working Enter')
//         }
//
//
//     }
//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setId(Number(event.target.id))
//         setTitle(event.target.value)
//         setEdit(true)
//     }
//     const onBlur =() => {
//         taskEdit(title,id,edit)
//     }
//
//
//     return (
//         <div>
//             {todos.map(task => {
//                 const classes = ['todo']
//
//                 if (task.completed) {
//                     classes.push('completed')
//                 }
//                 if (!task.edit) {
//                     classes.push('edit')
//                 }
//
//                 return (
//                     <li key={task.id}
//                         className={classes.join(' ')}
//                         style={{background: `${task.color}`}}>
//                         <label
//                             htmlFor={`${task.id}`}
//                             className='span-checkbox'>
//                             <input
//                                 type='checkbox'
//                                 id={`${task.id}`}
//                                 checked={task.completed}
//                                 onChange={() => onToggle(task.id)}
//                                 className='checkbox'
//                             /> </label>
//                         <span className='span'>
//                             <input
//                                 style={{background:`${task.color}`}}
//                                 type='text'
//                                 id={`${task.id}`}
//                                 value={title}
//                                 onKeyPress={onKeyPressEdit}
//                                 onBlur={onBlur}
//                                 onChange={onChange}
//                                 className='edit'/>
//                         <span
//                             className='item'
//                             onDoubleClick={() => onDouble(task.id)}>{task.title}</span>
//                         <button
//                             className='button-delete'
//                             onClick={() => onRemove(task.id)}>
//                             Delete
//                         </button> </span>
//                     </li>
//                 )
//             })}
//
//         </div>
//     )
// }
//
// export default ListItem;