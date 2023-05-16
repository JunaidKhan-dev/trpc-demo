import { FormEvent, useState } from "react"

import { trpc } from "@/utils/trpc"
import { Todo } from "@prisma/client"

const AddToDo = () => {
  const [formData, setFormData] = useState<Todo>({
    id: 0,
    name: "",
    priority: "",
  })

  const util = trpc.useContext()

  const addTodo = trpc.todo.addTodo.useMutation({
    onSuccess: () => {
      util.todo.getTodos.invalidate()
    },
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.name === "" || formData.priority === "") {
      return alert("Please fill out all fields")
    }
    addTodo.mutate({
      name: formData.name,
      priority: formData.priority,
    })
    setFormData({ id: 0, name: "", priority: "" })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Priority"
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
      />
      <button type="submit">Add To Do</button>
    </form>
  )
}

export default AddToDo
