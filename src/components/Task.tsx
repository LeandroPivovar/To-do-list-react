import { Check, Trash } from '@phosphor-icons/react'
import style from './Task.module.css'

interface TaskProps{
    id: number,
    status: number,
    content:string, 
    onDeleteTask: (taskId: number) => void,
    onFinallyTask: (taskId: number) => void,
}

export function Task({id, status, content, onDeleteTask, onFinallyTask}:TaskProps){

    function handdleDeleteTask(){
        onDeleteTask(id)
    }

    function handdleFinallyTask(){
       onFinallyTask(id)
    }

    return(
        <>
            <div className={ status == 1 ? style.taskFinally : style.task}>
                <div onClick={handdleFinallyTask} className={style.buttonCircle}>{ status == 1 ? <Check size={12} weight="bold"/> : ''} </div>
                <p>{content}</p>
                <Trash size={20} className={style.buttonTrash} onClick={handdleDeleteTask}></Trash>
            </div>
        </>
    )
}