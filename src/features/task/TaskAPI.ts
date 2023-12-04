import { SERVER_URL } from "../../app.constants"
import { ResponseWrapper } from "../../models/reponse-wrapper.model"
import { CreateTask, Task } from "../../models/task.model"

const url = `${SERVER_URL}/todos`

export const fetchAllTasks = async (): Promise<Task[]> => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task[]>
    return parseDatesForTaskList(result.data)
}

export const fetchOneTask = async (id: number): Promise<Task> => {
    const response = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return parseDatesForTask(result.data)
}

export const deleteTask = async (id: number) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return parseDatesForTask(result.data)
}

export const createTask = async (task: CreateTask) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const result = await response.json() as ResponseWrapper<Task>
    return parseDatesForTask(result.data)
}

export const updateTask = async (id: number, task: CreateTask) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const result = await response.json() as ResponseWrapper<Task>
    return parseDatesForTask(result.data)
}

export const toggleTaskComplete = async (id: number) => {
    const response = await fetch(`${url}/toggle-complete/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return parseDatesForTask(result.data)
}

const parseDatesForTaskList = (tasks: Task[]): Task[] => {
    return tasks.map(task => parseDatesForTask(task))
}

const parseDatesForTask = (task: Task): Task => {
    const taskParsed: Task = {
        ...task,
        createdAt: new Date(task.createdAt),
        updatedAt: new Date(task.updatedAt),
        deletedAt: task.deletedAt && new Date(task.deletedAt),
    }
    return taskParsed
}