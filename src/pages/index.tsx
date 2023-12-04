import type { NextPage } from 'next'
import Head from 'next/head'

import { Task } from '../models/task.model'

import TaskList from '../features/task/task-list/TaskList'
import { fetchAllTasks, deleteTask } from '../features/task/TaskAPI'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../shared/button/Button'
import ConfirmationModal from '../shared/confirmation-modal/ConfirmationModal'


const IndexPage: NextPage = () => {
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
  
  return (
    <div className='p-4'>
      <Head>
        <title>Autority Challenge</title>
      </Head>
      <div className='m-auto' style={{width: 'min(600px, 100%)'}}>
        <div className='flex justify-end pb-2'>
          <Link href={'/task'}>
            <Button>New task</Button>
          </Link>
        </div>
        <TaskList tasks={tasks} onDeleteTask={onDeleteTask}></TaskList>
        <ConfirmationModal isOpen={confirmationModalOpen} onClose={(value) => handleCloseModal(value)}
          danger={true} title='Delete task'
          description='Are you sure you want to delete this task?' />
      </div>
    </div>
  )
}

export default IndexPage
