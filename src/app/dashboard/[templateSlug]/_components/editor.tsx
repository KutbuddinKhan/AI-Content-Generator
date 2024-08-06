"use client"

import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import "react-quill/dist/quill.snow.css"
import ReactQuill from 'react-quill'

const Editor = ({ value }: { value: string }) => {
    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        []
    );
    return (
        <ReactQuill
            theme='snow'
            value={value}
            className='h-[350px] pb-10 bg-white whitespace-pre-wrap'
        />
    )
}

export default Editor