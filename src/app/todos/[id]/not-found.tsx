import Link from 'next/link'
import React from 'react'

type Props = {}

const TodoNotFound = (props: Props) => {
    return (
        <div>
            <h1>Todo não encontrado.</h1>
            <Link href="/">Voltar para a home</Link>
        </div>
    )
}

export default TodoNotFound