import { addTodo } from '../store/notes';
import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToDoForm: React.FC = () => {

    const dispatch = useDispatch();
    const title = useRef<HTMLInputElement>(null);
    const text = useRef<HTMLTextAreaElement>(null);
    const color = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if ( title.current?.value.trim() === '' ||
             text.current?.value.trim() === ''
        ) {
            toast.error('Please fill in the form before submitting', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            return;
        }

        dispatch( addTodo( {
            id: uuidv4().toString(),
            title: title.current!.value,
            text: text.current!.value,
            date: new Date().toLocaleDateString(),
            color: color.current!.value           
        }
        ));

        title.current!.value = '';
        text.current!.value = '';
        toast.success('Note Added!', {
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
        <form onSubmit={ submitHandler } className="w-full flex flex-col md:w-2/5">
            <label htmlFor="title" className='mb-2 font-semibold'>Title</label>
            <input type="text" id="title" placeholder="Write Title" ref={ title } className='mb-2 py-1 px-1 rounded-sm'/>

            <label htmlFor="text" className='mb-2 font-semibold'>Text</label>
            <textarea id="text" placeholder="Write Note" ref={ text } className='mb-5 py-1 px-1 rounded-sm'/>

            <label htmlFor="color" className='mb-2 font-semibold'>Color</label>
            <input type="color" list='redColors' defaultValue="#8dd3ec" ref={ color } className='mb-4 rounded-sm' />
            <datalist id="redColors" className='rounded-sm'>
                <option value="#8dd3ec" />
                <option value="#00ffff" />
                <option value="#E9AFA3" />
                <option value="#C5D86D" />
            </datalist>
            
            <button className='bg-btn text-white w-24 mt-2 rounded hover:bg-btn-hover ease-in-out duration-150 py-1' type='submit'>Add Note</button>
            <ToastContainer />
        </form>
    )
}

export default ToDoForm;