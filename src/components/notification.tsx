import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Bell } from 'lucide-react'
import React from 'react'

export default function Notification() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='bg-gray-100 p-3 rounded-full'>
                    <Bell className='size-5' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="w-56 bg-red-300 mt-2 rounded-md">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
