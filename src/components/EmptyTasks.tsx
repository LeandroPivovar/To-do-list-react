import { Clipboard } from "@phosphor-icons/react";
import style from './EmptyTasks.module.css'

export function EmptyTasks(){
    return(
        <>
        <div className={style.emptyTasks}>
            <Clipboard size={56}></Clipboard>
            <p><strong>Você ainda não tem tarefas cadastradas</strong><br/>
            Crie tarefas e organize seus itens a fazer</p>
        </div>
        </>
    )
}