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
    return result.data
}

export const fetchOneTask = async (id: number): Promise<Task> => {
    const response = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return result.data
}

export const deleteTask = async (id: number) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return result.data
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
    return result.data
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
    return result.data
}

export const toggleTaskComplete = async (id: number) => {
    const response = await fetch(`${url}/toggle-complete/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json() as ResponseWrapper<Task>
    return result.data
}