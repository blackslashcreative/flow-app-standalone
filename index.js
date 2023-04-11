function App(){
  /* ToDos List Initialize State */ 
  const [todos, setTodos] = React.useState([
    {
      text: 'build todo functionality',
      isCompleted: false,
    },
    {
      text: 'add a focus timer',
      isCompleted: false,
    },
    {
      text: 'package as a lightweight desktop app',
      isCompleted: false,
    }
  ]);
  /* ToDo Form Value */ 
  const [value, setValue] = React.useState('');
  /* Handle Form Submit */ 
  const handleSubmit = e => {
    e.preventDefault(); // prevent page reload 
    if (!value) return; // check for input 
    const newTodos = [...todos, {text:value, isCompleted:false}]; // update todos state, adding new one
    setTodos(newTodos);
    setValue(''); // clear the form input 
  }
  /* Remove Todo item */ 
  const removeTodo = e  => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  /* JSX list of todo's and form to add a new one */ 
  return(<>
    {todos.map((todo, index) => 
      <div className="todo" key={index} id={index} onClick={removeTodo}>{todo.text}</div>)}
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="add item ..."
        onChange={e => setValue(e.target.value)}
        />
    </form>
  </>);
}

/* Render the app */ 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)