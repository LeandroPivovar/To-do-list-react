import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewItemBar.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface NewItenBarProps{
    createNewTask:(newTaskContent:string)=>void
}

export function NewItemBar({createNewTask}:NewItenBarProps){

    const [createItemText, setCreateItemText] = useState('')

    function handdleCreateNewIten(event: FormEvent){
        event.preventDefault()
        createNewTask(createItemText)
        setCreateItemText('')
    }

    function handdleNewCreateItenText(event: ChangeEvent<HTMLInputElement>){
        const newItenText = event.target.value
        setCreateItemText(newItenText)
    }

    return(
        <>  
            <form action="" className={styles.newItemBar} onSubmit={handdleCreateNewIten}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={handdleNewCreateItenText} value={createItemText}/>
                <button>Criar <PlusCircle size={16} ></PlusCircle></button>
            </form>
        </>
    )
}