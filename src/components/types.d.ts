interface Todo {
  title: string,
  checked: boolean,
  edited: boolean,
  id: string
}

type updateTodoField = (todo: Todo, field: { title: string, value: any }) => void
type updateTodo = ({ todo: Todo, title: string, edited: boolean }) => void
type removeTodo = (id: string) => void
