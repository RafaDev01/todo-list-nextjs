'use client'

import Link from 'next/link'
import React from 'react'

type Props = {}

const TodoEditErrorPage = (props: Props) => {
    return (
        <div>
            <h1>Ocorreu um problema, tente novamente mais tarde</h1>
            <Link href="/">Voltar para a home</Link>
        </div>
    )
}

export default TodoEditErrorPage