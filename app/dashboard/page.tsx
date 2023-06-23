import React from 'react'
import Dashboard from './components/Dashboard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex'>
        <Dashboard />
    </div>
  )
}

export default page