import { Task } from "../../../models/task.model"
import { TaskItem } from "./task-item/TaskItem"

type Props = {
    tasks: Task[],
    onDeleteTask: (id: number) => void
}
const TaskList = ({ tasks, onDeleteTask }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            {tasks.map(task => (
                <TaskItem task={task} key={task.id} onDelete={() => onDeleteTask(task.id)}></TaskItem>
            ))}
        </div>
    )
}

export default TaskList