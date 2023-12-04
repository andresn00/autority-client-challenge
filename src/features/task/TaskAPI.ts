import { SERVER_URL } from "../../app.constants"
import { ResponseWrapper } from "../../models/reponse-wrapper.model"
import { Task } from "../../models/task.model"

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