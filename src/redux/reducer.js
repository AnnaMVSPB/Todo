const initialState = {
  todos: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload.text,
            id: Date.now(),
            isEditing: false,
            red: false,
            priority:action.payload.pr
          }
        ]
      };

    case 'START_EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.isEditing = true
          }
          
          return todo
        })
      };

    case 'EDIT_TODO':
      const index = state.todos.findIndex((item) => item.id === action.payload.id)
      const copyTodos = [...state.todos]
      const copyTodoItem = {...copyTodos[index]};

      copyTodoItem.title = action.payload.title;
      copyTodoItem.isEditing = false;
      copyTodos[index] = copyTodoItem;

      return {
        ...state,
        todos: copyTodos
      };  


    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
}

export default reducer;
