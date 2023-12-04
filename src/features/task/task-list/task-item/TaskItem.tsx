import React, { useState } from 'react'
import { Task } from '../../../../models/task.model'
import { FaEllipsisVertical, FaRegTrashCan } from "react-icons/fa6";


type Props = {
    task: Task,
    onDelete: () => void,
    onTaskClick: () => void,
    onToggleTaskComplete: () => void,
}

export const TaskItem = ({ task, onDelete, onTaskClick, onToggleTaskComplete }: Props) => {
    const [isComplete, setIsComplete] = useState<boolean>(task.isComplete)
    const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(false)

    const onIsCompleteChange = () => {
        setIsComplete(!isComplete)
        onToggleTaskComplete()
    }

    return (
        <div className='rounded-lg shadow-md overflow-hidden'>
            <div className='flex gap-2 relative'>
                <div className='pl-4 flex items-center'>
                    <input type='checkbox' checked={isComplete} onChange={onIsCompleteChange}
                        className='w-5 h-5' />
                </div>
                <div className='flex-1 p-4 cursor-pointer' onClick={onTaskClick}>
                    <p className='text-lg font-bold'>
                        <span className={isComplete ? 'line-through text-slate-600' : ''}>{task.name}</span>
                        <span className='ml-2 text-slate-700 text-sm'>({task.author})</span>
                    </p>
                    <p>
                        <span className={isComplete ? 'text-slate-400' : ''}>{task.description}</span>
                    </p>
                </div>
                {showDeleteBtn ?
                    <>
                        <div style={{'--opacity': 0.1} as React.CSSProperties} className='absolute w-full h-full bg-black animate-[enterOpacity_0.25s_ease-in-out_1_forwards]'
                            onClick={() => setShowDeleteBtn(false)}></div>
                        <button className='z-10 px-4 bg-red-500 text-white flex items-center animate-[enterRight_0.25s_ease-in-out_1_forwards]' style={{ '--mr-start': '-50px' } as React.CSSProperties}
                            onClick={onDelete}>
                            <FaRegTrashCan className='w-5 h-5' />
                        </button>
                    </>
                    :
                    <button className='px-4 flex items-center' onClick={() => setShowDeleteBtn(true)}>
                        <FaEllipsisVertical className='w-5 h-5' />
                    </button>
                }
            </div>
        </div>
    )
}
