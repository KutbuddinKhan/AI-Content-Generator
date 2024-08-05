import { contentTemplates } from '@/lib/content-templates'
import Link from 'next/link'
import React from 'react'

const TemplateList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5'>
      {contentTemplates.map((template) => (
        <div key={template.slug}>
            <Link href={`/dashboard/${template.slug}`} className='bg-white w-full rounded-lg h-[200px] py-4 px-4 text-center flex flex-col justify-center'>
                <template.icon className='h-12 w-12 mx-auto' />
                <h2 className='font-semibold mt-5'>{template.name}</h2>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default TemplateList
