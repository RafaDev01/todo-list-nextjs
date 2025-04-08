import { db } from "@/db";
import { notFound } from "next/navigation";
import { setTimeout } from "timers/promises"; // este já é async!

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function TodoShow({ params }: PageProps) {
    await setTimeout(2000); // aguarda 1 segundo certinho

    const { id } = await params; // obrigatório no Next.js 15

    const todo = await db.todo.findFirst({
        where: { id: Number(id) }
    });

    if (!todo) return notFound();

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl">Tarefa: {todo.titulo}</h1>
            <p className="text-2xl">{todo.descricao}</p>
        </div>
    );
}
