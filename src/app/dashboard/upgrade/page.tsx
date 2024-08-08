"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const Upgrade = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const response = await axios.post('/api/upgrade/checkout')
    // push user to the stripe url
    router.push(response.data.url)
  }
  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 bg-white rounded'>
        <h2 className='font-medium'>Upgrade Credit</h2>
      </div>
      <div className='mt-5 py-6 px-4 rounded'>
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>$10 One-Time Purchase</CardTitle>
            <CardDescription>10,000 AI Credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=''>
              <p className='flex my-2 gap-2'>
                <Check />100,000 words/purchase
              </p>
              <p className='flex my-2 gap-2'>
                <Check />All Template Access
              </p>
              <p className='flex my-2 gap-2'>
                <Check />Retain All History
              </p>
            </div>
            <Button  className='mt-5' onClick={handleOnClick}>Purchase</Button>
          </CardContent>
          
        </Card>
      </div>
    </div>
  )
}

export default Upgrade
