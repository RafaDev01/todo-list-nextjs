"use server"

import { db } from "@/db"
import { redirect } from 'next/navigation'

export const addTodo = async (formData: any) => {
    console.log(formData)

    const titulo = formData.get("titulo")
    const descricao = formData.get("descricao")
    const status = "pendente"

    console.log(titulo, descricao)

    const todo = await db.todo.create({
        data: {
            titulo,
            descricao,
            status
        }
    })

    console.log(todo)
    redirect("/")
}