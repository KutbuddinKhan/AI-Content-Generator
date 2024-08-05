

import Image from 'next/image'
import React from 'react'
import { MuseoModerno } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const museo = MuseoModerno({
    weight: "700",
    subsets: ["latin"],
})

const Logo = () => {
    return (
            <Link href="/" className='flex flex-col items-center'>
                <Image
                    src="/logo.svg"
                    width={64}
                    height={64}
                    alt='Logo'
                />
                <h2 className={cn(museo.className, "text-xl")}>
                    CreativeAI
                </h2>
            </Link>
    )
}

export default Logo