import type { NextPage } from 'next'
import Head from 'next/head'

import { Task } from '../models/task.model'

import TaskList from '../features/task/task-list/TaskList'
import { fetchAllTasks, deleteTask, toggleTaskComplete } from '../features/task/TaskAPI'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../shared/button/Button'
import ConfirmationModal from '../shared/confirmation-modal/ConfirmationModal'
import { useRouter } from 'next/router'


const IndexPage: NextPage = () => {
  const router = useRouter()
  
  const [tasks, setTasks] = useState<Task[]>([])
  const [confirmationModalOpen, setConfirmationModalOpen] = useState<boolean>(false)
  const [taskToDeleteId, setTaskToDeleteId] = useState<number | null>(null)

  useEffect(() => {
    getAllTasks()
  }, [])

  const getAllTasks = async () => {
    try {
      const tasks = await fetchAllTasks()
      setTasks(tasks)
    } catch (e) {
      console.log('error');
    }
  }

  const onDeleteTask = (id: number) => {
    setConfirmationModalOpen(true)
    setTaskToDeleteId(id)
  }

  const handleCloseModal = (value: boolean) => {
    setConfirmationModalOpen(false)
    if (!value || !taskToDeleteId) return
    
    deleteTask(taskToDeleteId).then(() => {
      setTasks(tasks.filter(t => t.id != taskToDeleteId))
      setTaskToDeleteId(null)
    })
  }

  const onTaskClick = (id: number) => {
    const url = '/task/[id]'
    router.push({ pathname: url, query: { id } })
  }

  const onToggleTaskComplete = (id: number) => {
    toggleTaskComplete(id).then((taskUpdated) => {
      const newTasks = tasks.filter(t => t.id !== id)
      setTasks([...newTasks, taskUpdated])
    })
  }
  
  return (
    <div className='p-4'>
      <Head>
        <title>Autority Challenge</title>
      </Head>
      <div className='m-auto' style={{width: 'min(600px, 100%)'}}>
        <div className='flex justify-end pb-4'>
          <Button className='w-full md:w-auto'>
            <Link href={'/task'}>
              New task
            </Link>
          </Button>
        </div>
        <TaskList tasks={tasks} onDeleteTask={onDeleteTask}
          onTaskClick={onTaskClick} onToggleTaskComplete={onToggleTaskComplete}></TaskList>
        <ConfirmationModal isOpen={confirmationModalOpen} onClose={(value) => handleCloseModal(value)}
          danger={true} title='Delete task'
          description='Are you sure you want to delete this task?' />
      </div>
    </div>
  )
}

export default IndexPage
