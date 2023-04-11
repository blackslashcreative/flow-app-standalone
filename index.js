function App(){
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
  ])

  return(<>
    {todos.map((todo, index) => 
      <div className="todo" key={index}>{todo.text}</div>)}
  </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)