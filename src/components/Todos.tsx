import { trpc } from "@/utils/trpc"

const Todos = () => {
  const { data, error } = trpc.todo.getTodos.useQuery()

  console.log(data)
  return (
    <div>
      <ul>
        {data?.map((todo) => {
          return (
            <li key={todo.id}>
              Task: {todo.name} -- Priority: {todo.priority}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos
