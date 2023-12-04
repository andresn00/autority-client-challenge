import type { NextPage } from 'next'
import Head from 'next/head'

import { Task } from '../models/task.model'

import styles from '../styles/Home.module.css'
import TaskList from '../features/task/task-list/TaskList'
import { fetchAllTasks } from '../features/task/TaskAPI'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../shared/button/Button'


const IndexPage: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])

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
        <TaskList tasks={tasks}></TaskList>
      </div>
    </div>
  )
}

export default IndexPage
