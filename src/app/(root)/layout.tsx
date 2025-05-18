import Navbar from '@/components/navbar'
import { Fragment } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <Navbar />
            <div className='pt-24 px-5'>
                <div className='max-w-7xl ml-auto '>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}
