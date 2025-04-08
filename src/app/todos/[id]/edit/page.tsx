import { findTodoById } from '@/actions'
import { TodoForm } from '@/components/TodoForm'
import React from 'react'

type PageProps = {
    params: Promise<{ id: string }>;
};

const TodoEdit = async ({ params }: PageProps) => {
    const { id } = await params;

    const todo = await findTodoById(Number(id)); // Certifique-se de que `findTodoById` é uma função assíncrona

    if (!todo) {
        return <div>Todo não encontrado</div>
    }

    return (
        <>
            <div className='max-w-md mx-auto mt-10'>
                <h1 className='text-2xl font-bold text-center mb-6'>Editando: {todo.titulo}</h1>
                <TodoForm todo={todo} />
            </div>
        </>
    )
}

export default TodoEdit