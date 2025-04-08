"use server"

import { db } from "./db"
import { redirect } from "next/navigation"
import { Todo } from "@prisma/client";

export async function deleteTodo(formData: FormData) {
    const id = Number(formData.get('id'));

    if (isNaN(id)) return;

    await db.todo.delete({
        where: { id }
    });

    redirect('/');
}

export const findTodoById = async (id: number): Promise<Todo | null> => {
    /* throw new Error("Ops, algo deu errado, tente novamente mais tarde"); */

    const todo = await db.todo.findFirst({
        where: { id }
    });

    return todo;
};

export const updateTodo = async (_formState: any, formData: FormData) => {
    const id = Number(formData.get("id"));
    const titulo = formData.get("titulo")?.toString();
    const descricao = formData.get("descricao")?.toString();

    const error: Record<string, string> = {};

    // Validações
    if (isNaN(id)) {
        error.titulo = "ID inválido."; // Ou crie um campo separado se quiser tratar esse caso fora dos inputs
    }

    if (!titulo || (titulo ?? "").length < 5) {
        error.titulo = "O título precisa de pelo menos 5 caracteres.";
    }

    if ((descricao ?? "").length < 10) {
        error.descricao = "A descrição precisa ter ao menos 10 caracteres.";
    }

    // Retorna erros de validação, se existirem
    if (Object.keys(error).length > 0) {
        return { errors: error };
    }

    try {
        // Atualiza o banco de dados
        await db.todo.update({
            where: { id },
            data: {
                titulo,
                descricao,
            },
        });

        // Retorna sucesso
        return { success: true };
    } catch (err) {
        // Retorna erro global em caso de falha no banco de dados
        return {
            errors: { global: (err instanceof Error) ? err.message : "Ocorreu um erro desconhecido." },
        };
    }
    // Retorna null se não houver erros
    return null;
};
