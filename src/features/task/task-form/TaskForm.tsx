import { useState } from "react"
import { CreateTask, Task } from "../../../models/task.model"
import { Button } from "../../../shared/button/Button"
import Head from "next/head"
import { Input } from "../../../shared/input/Input"
import { Textarea } from "../../../shared/textarea/Textarea"

type Props = {
    task?: Task,
    onSave: (task: CreateTask) => void,
    onCancel: () => void,
}
const TaskForm = ({ task, onSave, onCancel }: Props) => {
    const [name, setName] = useState<string>(task?.name || '')
    const [description, setDescription] = useState<string>(task?.description || '')
    const [author, setAuthor] = useState<string>(task?.author || '')
    const [isComplete, setIsComplete] = useState<boolean>(task?.isComplete || false)

    const onSubmit = (e) => {
        e.preventDefault()
        const task: CreateTask = {
            name,
            description,
            author,
            isComplete
        }
        onSave(task)
    }

    return (
        <div>
            <Head>
                <title>New Task</title>
            </Head>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <Input type="text" id="name" name="name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <Textarea id="description" name="description"
                        value={description} onChange={(e) => setDescription(e.target.value)}>
                    </Textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="author">Author</label>
                    <Input type="text" id="author" name="author"
                        value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" id="is-complete" name="is-complete"
                        checked={isComplete} onChange={(e) => setIsComplete(e.target.checked)}
                        className="h-4 w-4 focus:ring-indigo-500" />
                    <label htmlFor="is-complete" className="font-semibold">Complete</label>
                </div>
                <div className="flex justify-end gap-2">
                    <Button onClick={onCancel} severity="plain">Cancel</Button>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm