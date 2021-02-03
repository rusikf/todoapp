interface Todo {
  title: string,
  checked: boolean,
  edited: boolean
}

type toggleTodo = (todo: Todo) => void
type editTodo = (todo: Todo) => void
type updateTodo = (todo: Todo, title: string) => void
