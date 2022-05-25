import { useDispatch } from 'react-redux'
import { Todo } from "../models/models";
import { deleteTodo } from "../store/notes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        const idToRemove = todo.id;
        dispatch( deleteTodo( idToRemove ));

        toast.error('Note Deleted!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }

    return (        
        <div className="todo-item rounded-md mb-6 last-of-type:mb-0 py-2 px-4" key={ todo.id } style={{ backgroundColor: todo.color }}>
            <h3 className="text-xl font-semibold mb-2">{ todo.title }</h3>
            <p className="text-lg mb-2">{ todo.text }</p>
            <p className="mb-2">{ todo.date }</p>
            <button onClick={ deleteHandler } className='bg-btn-delete hover:bg-deleteHover ease-in-out duration-150 text-white px-2 py-1 rounded'>Delete</button>
        </div>
    )
}

export default TodoItem;