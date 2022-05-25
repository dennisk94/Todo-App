import { useEffect, useState } from 'react';
import { selectTodos } from './store/notes';
import { useSelector } from "react-redux";
import { Todo } from './models/models';
import Header from './components/Header';
import ToDoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const todosState = useSelector(selectTodos);
  const [ todos, setTodos ] = useState<Todo[] | []>([]);

  useEffect(() => {
    const todoLocalStorage = JSON.parse(localStorage.getItem('TODOS') || '{}');

    if ( todoLocalStorage.length > 0 ) {
      setTodos( JSON.parse(localStorage.getItem('TODOS') || '{}') );
    } else {
      setTodos([]);
    }
  }, [todosState]);

  return (
    <div className="App">
      <Header />
      <div className='flex flex-col justify-around mx-5 my-20 gap-x-8 sm:mx-5 md:flex-row md:mx-10 lg:mx-20'>
        <ToDoForm />
        {
          todos !== [] && <TodoList todos={ todos } />
        }
        
      </div>
    </div>
  );
}

export default App;
