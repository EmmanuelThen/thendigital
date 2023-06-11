import React from 'react'
import DashNavbar from './DashNavbar'
import DashGridSection from './DashGridSection'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className='flex'>
            <div>
                <DashNavbar />
            </div>
            <section className='hidden md:block'>
                <DashGridSection />
            </section>
        </div>
    )
}

export default Dashboard