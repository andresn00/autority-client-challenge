export type Task = {
    id: number,
    name: string,
    description: string,
    author: string,
    isComplete: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}

export type CreateTask = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
