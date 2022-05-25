import TodoItem from "./ToDoItem";
import { Todo } from "../models/models";

const TodoList: React.FC<{ todos: Todo[] | [] }> = ( { todos } ) => {
  return (
    <div className="todos-container w-full h-fit mt-8 bg-notes-bkgd px-3 py-2 rounded-lg md:w-3/5">
        {
          todos.map( todo => <TodoItem key={ todo.id } todo={ todo } />)
        }
    </div>
  )
}

export default TodoList;