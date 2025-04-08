import React from 'react'
import { addTodo } from './actions'

// 1 - Criação do form
const TodoPage = () => {
    //formData => useState
    //2 - Inserção no banco
    return (
        <div className='max-w-md mx-auto mt-10'>
            <h1 className='text-2xl  font-bold text-center mb-6'>Criar nova tarefa</h1>
            <form className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg' action={addTodo}>
                <label htmlFor='titulo' className='block text-sm font-medium text-gray-700'>Titulo
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder='Insira o título'
                        required
                        className='py-2 mt-1 px-4 border-gray-300 rounded-md w-full' />
                </label>
                <label htmlFor='descricao' className='block text-sm font-medium text-gray-700'>Descrição
                    <textarea
                        id="descricao"
                        name="descricao"
                        placeholder='Descreva a tarefa'
                        required
                        className='py-2 mt-1 px-4 border-gray-300 rounded-md w-full h-32'>
                    </textarea>
                </label>
                <button type='submit' className='px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none fucus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Criar todo</button>
            </form>
        </div>
    )
}

export default TodoPage