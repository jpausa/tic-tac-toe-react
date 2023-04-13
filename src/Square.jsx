import React from 'react'

export default function Square({children, updateBoard, index}) {
  return (
    <div className='square'>{children}</div>
  )
}