'use client'

import Link from "next/link";
import SearchInput from "./search-input";
import { PencilLine, Search } from "lucide-react";
import Logo from "@/assets/icons/logo";
import Notification from "./notification";
import Account from "./account";

export default function Navbar() {
    return (
        <header className="p-5 bg-white border-b fixed top-0 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* KIRI */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                        >
                            <Logo />
                        </Link>
                        <div className="relative w-full hidden md:block">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <Search className="size-5" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 w-full rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-6 hover:underline">
                            <button className="flex items-center gap-1 cursor-pointer text-gray-800">
                                <PencilLine className="size-6" />
                                <span className="text-sm">Write</span>
                            </button>
                        </div>

                        <SearchInput />
                        {/* <Button asChild size='lg' className='rounded-full'>
                            <Link
                                href="/auth/login"
                            >
                                Sign In
                            </Link>
                        </Button>
                        <Button asChild size='lg' variant='secondary' className='rounded-full hidden md:flex'>
                            <Link
                                href="/auth/register"
                            >
                                Sign Up
                            </Link>
                        </Button> */}
                        <Notification />
                        <Account />
                    </div>
                </div>
            </div>
        </header>
    )
}
