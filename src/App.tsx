import { Header } from "./components/Header"
import { NewItemBar } from './components/NewItemBar'
import style from './App.module.css'
import { useState } from "react"
import { Task } from './components/Task'
import { EmptyTasks } from "./components/EmptyTasks"


interface Task{
  id: number,
  status: number,
  content: string,
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 0,
      status: 1,
      content: 'Primeira task de teste'
    }
  ])
  
  function handdleCreateNewTask(newTaskContent:string){
    const taskId = tasks.length

    const newTask:Task = {
      id: taskId,
      status: 0,
      content: newTaskContent
    }

    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  function handdleDeleteTask(taskId:number){
    const removedTask = tasks.filter((task)=>{
      if(task.id !== taskId){
        return task
      }
    })

    setTasks(removedTask)
  }

  function handdleFinnalyTask(taskId:number){
    const editedTask = tasks.map(task=>{
      if(task.id !== taskId){
        return task
      }else{
        const newId = task.status == 1 ? 0 : 1
        const newTask = {
          id: task.id,
          status: newId,
          content: task.content
        }
        console.log(newTask)
        return newTask
      }
    })

    setTasks(editedTask)

  }

  const finnalyTasks = () => {
    let acumulator = 0
    tasks.forEach(task =>{
      if(task.status == 1){
        acumulator ++ 
      }
    })

    if(acumulator > 0){
      return acumulator + ' de ' + tasks.length
    }else{
      return 0
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className={style.wrapper}>
        <NewItemBar createNewTask={handdleCreateNewTask}></NewItemBar>
        <div className={style.listTasks}>
                <div className={style.wrapperHeader}>
                    <p>Tarefas criadas <span className={style.countNumber}>{tasks.length}</span></p>
                    <p>Concluidas <span className={style.countNumber}>{finnalyTasks()}</span></p>
                </div>
                <div className={style.taskListContent}>
                    {
                     tasks.length == 0 ? <EmptyTasks></EmptyTasks> : tasks.map(task => <Task key={task.id} content={task.content} status={task.status} id={task.id} onDeleteTask={handdleDeleteTask} onFinallyTask={handdleFinnalyTask}></Task>)
                    }

                </div>
            </div>
      </div>
    </>
  )
}

export default App
