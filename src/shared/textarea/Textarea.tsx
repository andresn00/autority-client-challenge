import React from 'react'
import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'textarea'>


export const Textarea = ({ children, ...attributes }: Props) => {
  return (
    <textarea className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
      {...attributes}>
        {children}
    </textarea>
  )
}
