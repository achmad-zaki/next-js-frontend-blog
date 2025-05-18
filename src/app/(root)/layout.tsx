import Navbar from '@/components/navbar'
import { Fragment } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    )
}
