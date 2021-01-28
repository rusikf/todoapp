interface Todo {
  title: string,
  checked: boolean
}

type toggleTodo = (todo: Todo) => void
