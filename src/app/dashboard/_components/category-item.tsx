"use client"

import React from 'react'
import { CategoryProps } from './categories'
import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

const CategoryItems = ({ name, value }: CategoryProps) => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const currentCategory = searchParams.get('category')

    const isSelected = currentCategory === value

    // localhost:3000/dashboard/?category=Youtube
    const handleOnClick = () => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                category: isSelected ? null : value,
            }
        },
            { skipNull: true, skipEmptyString: true }
        );
        router.push(url)

    }

    return (
        <button
            onClick={handleOnClick}
            className={cn(
                "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer"
            )}
        >
            {name}
        </button>
    )
}

export default CategoryItems
