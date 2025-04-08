"use server"

import { db } from "@/db"
import { redirect } from 'next/navigation'

export const addTodo = async (formData: FormData) => {
    console.log(formData)

    const titulo = formData.get("titulo")?.toString() || "" // Converte para string
    const descricao = formData.get("descricao")?.toString() || null // Converte para string ou null
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