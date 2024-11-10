import '../styles/TodoItem.css'

function TodoItem({todoName,todoDate})
{
 return(
    <div className="row my-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2"><button type="button" className="btn btn-danger my-btn">Delete</button></div>
        </div>
  )
}
export  default TodoItem;