'use client'

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";

export default function PageAnimation({
    children,
}: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.80, type: 'spring' }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
