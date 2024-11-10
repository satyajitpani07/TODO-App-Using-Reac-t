import TodoItem from "./TodoItem";

const TodoItems=({todoItems})=>{
return <div className="Item-container">
  {todoItems.map((item)=>(<TodoItem key = {item.name} todoName={item.name} todoDate={item.dueDate}/>))}

  </div>
}
export default TodoItems;