import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import TaskForm from "../../features/task/task-form/TaskForm";
import { CreateTask } from "../../models/task.model";
import { createTask } from "../../features/task/TaskAPI";

const NewTaskPage: NextPage = () => {
    const router = useRouter()

    const onSave = async (task: CreateTask) => {
        await createTask(task)
        router.back()
    }

    const onCancel = () => {
        router.back()
    }

    return (
        <div className="p-4">
            <Head>
                <title>New Task</title>
            </Head>
            <div className='m-auto' style={{ width: 'min(600px, 100%)' }}>
                <h2 className="text-xl font-bold mb-4">New Task</h2>
                <TaskForm onSave={onSave} onCancel={onCancel}></TaskForm>
            </div>
        </div>
    )
}

export default NewTaskPage