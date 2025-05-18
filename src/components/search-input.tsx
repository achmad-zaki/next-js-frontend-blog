import { Search } from 'lucide-react'
import React, { Fragment, useEffect, useState } from 'react'

export default function SearchInput() {
    const [isMobile, setIsMobile] = useState(false);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (showInput) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [showInput]);

    useEffect(() => {
        // Jika search input terbuka dan user resize ke desktop, maka tutup search
        if (!isMobile && showInput) {
            setShowInput(false);
        }
    }, [isMobile, showInput]);

    return (
        <Fragment>
            <button onClick={() => setShowInput(!showInput)} className="md:hidden bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200">
                <Search className='size-5' />
            </button>

            {showInput && (
                <Fragment>
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-xs"
                        onClick={() => setShowInput(false)}
                    ></div>

                    <div className="absolute top-24 inset-x-0 px-5 z-10">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <Search className="size-5" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-3 w-full rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100"
                            />
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}
