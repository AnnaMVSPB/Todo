import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Pole() {
  const dispatch = useDispatch();

  function sabmitTodo(event) {
    event.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: { text: event.target.input.value, pr:event.target.selected.value} })
    event.target.input.value=''
    event.target.selected.value=''
  }

  return (
    <form onSubmit={sabmitTodo} className="p-3 mb-2 bg-success text-white">
      <div className="mb-3 w-25 p-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Введите список дел</label>
        <input  name='input' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <label htmlFor="exampleInputEmail1" className="form-label">Выбирите приоритет</label>
        <select  name='selected'className="form-select" aria-label="Default select example">
          <option value="1">Высокий</option>
          <option value="2">Низкий</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary p-3 mb-2 bg-warning text-dark">Добавить</button>
    </form>
  )
}
export default Pole;
