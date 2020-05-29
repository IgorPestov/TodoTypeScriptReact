export interface ITodo {
    task: string,
    _id: any,
    completed: any,
    edit: boolean,
    color: string
}

export interface ITodoTitle {
    // onAdd(title: string, color: string): void
}


export interface ITodoListProps {
    todos: ITodo[];

    onToggle(id: number): void

    onDouble(id: number): void

    onRemove(id: number): void

    taskEdit(title: string, id: number, edit?:boolean): void




}