'use client'

import { updateTodo } from "@/actions"
import { useState } from "react"
import { useRouter } from "next/navigation" // Importa o hook para redirecionamento

type Props = {
    todo: {
        id: number
        titulo?: string
        descricao?: string | null
    }
}

export const TodoForm = ({ todo }: Props) => {
    const [errors, setErrors] = useState<Record<string, string>>({}); // Estado para erros
    const router = useRouter(); // Instância do hook para redirecionamento

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const result = await updateTodo(null, formData);

        if (result?.errors) {
            setErrors(result.errors); // Atualiza o estado com os erros
        } else {
            setErrors({}); // Limpa os erros em caso de sucesso
            router.push("/"); // Redireciona para a página inicial
        }
    };

    return (
        <form
            className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="id" value={todo.id} />

            <label htmlFor='titulo' className='block text-sm font-medium text-gray-700'>
                Título
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder='Insira o título'
                    required
                    className='py-2 mt-1 px-4 border-gray-300 rounded-md w-full'
                    defaultValue={todo.titulo}
                />
            </label>
            {errors.titulo && (
                <p className="text-red-500 text-sm my-4 p-2 border border-red-600">{errors.titulo}</p>
            )}

            <label htmlFor='descricao' className='block text-sm font-medium text-gray-700'>
                Descrição
                <textarea
                    id="descricao"
                    name="descricao"
                    placeholder='Descreva a tarefa'
                    required
                    className='py-2 mt-1 px-4 border-gray-300 rounded-md w-full h-32'
                    defaultValue={todo.descricao || ""}
                />
            </label>
            {errors.descricao && (
                <p className="text-red-500 text-sm my-4 p-2 border border-red-600">{errors.descricao}</p>
            )}

            {errors.global && (
                <p className="text-red-500 text-sm my-4 p-2 border border-red-600">
                    {errors.global}
                </p>
            )}

            <button
                type='submit'
                className='px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
                Editar
            </button>
        </form>
    );
};
