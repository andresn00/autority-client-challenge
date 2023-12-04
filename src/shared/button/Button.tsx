import React from 'react'
import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'>

export const Button = ({ children, ...attributes }: Props) => {
  return (
    <button type='button' className='bg-indigo-500 text-white p-2 px-3 rounded-md' {...attributes}>
        {children}
    </button>
  )
}
