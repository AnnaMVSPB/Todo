import { useDispatch } from "react-redux"


function Cart({ todo, i }) {
  const dispatch = useDispatch();

  function Clic(id) {
    dispatch({ type: 'START_EDIT_TODO', payload: id })
  }

  function Change(event) {
    event.preventDefault()

    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id: todo.id,
        title: event.target.edit.value,
      }
    })
  }

  function Del(id) {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  return (
    <div className={todo.priority === '2' ?'cartt' : 'cartt2'}>
      <li className='cart'>
        {todo.isEditing === false ?
          <>
            <span>
              <strong>{i + 1}</strong>
            </span>
            <span onDoubleClick={() => Clic(todo.id)}>
              {todo.title}
            </span>
            <div>

              <button onClick={() => Del(todo.id)} >&times;</button>
            </div></>
          :
          <form onSubmit={Change}>
            <input defaultValue={todo.title} name="edit" type="text" />
            <button type="submit" >ok</button>
          </form>}
      </li>
    </div>
  )


}
export default Cart
