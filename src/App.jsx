import AppName from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="Item-container">
       <TodoItem1></TodoItem1>
        <TodoItem2/>
        </div>
    </center>
  );
}

export default App;
