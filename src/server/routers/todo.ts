import { z } from "zod"

import { procedure, router } from "../trpc"

export const todoRouter = router({
  addTodo: procedure
    .input(
      z.object({
        name: z.string().max(10, { message: "Max length is 10" }),
        priority: z.string().max(5, { message: "Max priority is 5" }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.prisma.todo.create({
        data: {
          name: input.name,
          priority: input.priority,
        },
      })
      return data
    }),
  getTodos: procedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.todo.findMany()
    return data
  }),
})
