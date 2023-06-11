import React from 'react'
import Dashboard from './components/Dashboard'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex'>
        <Dashboard />
    </main>
  )
}

export default page