import React from 'react'

const ErrorInput = ({message}) => {
  return (
    <span className='text-sm text-red-700 absolute font-medium'>{message}</span>
  )
}

export default ErrorInput