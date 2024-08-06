"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contentTemplates } from '@/lib/content-templates'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { chatSession } from '@/lib/gemini-ai'
import { Editor } from './_components/editor'
import axios from 'axios'

interface templateSlugProps {
  templateSlug: string
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>("")

  const selectedTemplate = contentTemplates.find((item) => item.slug === params.templateSlug)

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };


      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result.response.text());

      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
      console.log("response" + response)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-white rounded'>
        <h1 className='text-3xl font-bold text-gray-900'>
          {selectedTemplate?.name || 'Template not found'}
        </h1>
      </div>

      <form action={onSubmit}>
        <div className='flex flex-col gap-4 p-5 mt-5 bg-white'>
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label>{form.label}</label>
              {form.field === 'input' ? (
                <div className='mt-5'>
                  <Input name='title' />
                </div>
              ) : (
                <div className='mt-5'>
                  <Textarea name='description' />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className='mt-5' type='submit'>
          {isLoading ? (
            <Loader2 className='h-4 w-4 animate-spin' />
          ) : (
            "Generate Content"
          )
          }
        </Button>
      </form>

      <div className='my-10'>
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  )
}

export default TemplatePage
