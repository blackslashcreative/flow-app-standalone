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
  
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}]; // update todos state, adding new one
    setTodos(newTodos);
  }
  
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
    <TodoForm addTodo={addTodo}/>
  </>);
}

/* Render the app */ 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)