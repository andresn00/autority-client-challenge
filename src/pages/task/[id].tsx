import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { CreateTask, Task } from '../../models/task.model';
import { fetchOneTask, updateTask } from '../../features/task/TaskAPI';
import TaskForm from '../../features/task/task-form/TaskForm';

const EditTask: NextPage = () => {
  const router = useRouter()

  const [task, setTask] = useState<Task>()

  useEffect(() => {
    if (!router.query.id) return
    const id: number = Number(router.query.id)
    if (isNaN(id)) return
    getOneTask(id)
  }, [router.query.id])
  
  const getOneTask = async (id: number) => {
    const taskFound = await fetchOneTask(id)
    setTask(taskFound)
  }
  const onSave = async (taskUpdated: CreateTask) => {
    if (!task) return
    await updateTask(task.id, taskUpdated)
    router.push('/')
  }

  const onCancel = () => {
    router.push('/')
  }

  return (
    <div className="p-4">
      <Head>
        <title>Edit Task</title>
      </Head>
      <div className='m-auto' style={{ width: 'min(600px, 100%)' }}>
        <h2 className='text-xl font-bold mb-4'>Edit Task</h2>
        <TaskForm onSave={onSave} onCancel={onCancel} task={task}></TaskForm>
      </div>
    </div>
  )
}

export default EditTask
