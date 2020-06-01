export interface ITodo {
    task: string,
    _id: string,
    completed: boolean,
    edit: boolean,
    color: string
}

export interface ITodoTitle {
    createTodoFunc(color: string, title: string): void
}


export interface ITodoListProps {
    todos :  ITodo[];

    onToggle(_id: string): void

    onDouble(_id: string): void

    onRemove(_id: string): void

    taskEdit(todo: string, _id: string, edit:boolean): void




}