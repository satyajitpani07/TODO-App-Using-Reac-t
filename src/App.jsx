import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {

  const todoItems=[{
    name:" Buy Milk",
    dueDate:"4/10/2023",
  },
  {
    name:"Go to college",
    dueDate:"4/10/2023",
  }];

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
