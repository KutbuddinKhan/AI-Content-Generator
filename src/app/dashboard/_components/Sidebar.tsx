"use client"

import Logo from '@/components/Logo'
import { cn } from '@/lib/utils'
import { CreditCard, History, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const menuList = [
    {
        name: "Magic Tools",
        icon: WandSparkles,
        path: "/dashboard",
    },
    {
        name: "Output History",
        icon: History,
        path: "/dashboard/history",
    },
    {
        name: "Upgrade",
        icon: CreditCard,
        path: "/dashboard/upgrade",
    },
]

const Sidebar = () => {
    const path = usePathname()

    console.log(path)
    return (
        <div className='p-5 bg-white h-[800px] flex flex-col'>
            <Logo />
            <div className='mt-10 h-max flex flex-col justify-between'>
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.name} className={cn(
                        'flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center',
                        path === menu.path && 'bg-primary text-white'
                    )}>
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
