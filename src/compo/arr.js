import { useSelector } from "react-redux";
import Cart from "./Cart";

function Arr() {
  const todos = useSelector((state) => state.todos)

  return (
    <>
      {
        todos.length
          ? todos.map((todo, i) => <Cart todo={todo} key={todo.id} i={i} />)
          : <p>Пока у тебя нет дел</p>
      }
    </>
  )
}
export default Arr
