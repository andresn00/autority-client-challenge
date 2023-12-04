import { Task } from "../../../models/task.model"
import { TaskItem } from "./task-item/TaskItem"

const TaskList = ({ tasks }: { tasks: Task[] }) => {

    return (
        <div className="flex flex-col gap-2">
            {tasks.map(task => (
                <TaskItem task={task} key={task.id}></TaskItem>
            ))}
        </div>
    )
}

export default TaskList