import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateChunkComp = () => {
  return (
    <div className='mx-auto lg:mx-[20vw] text-slate-800 px-6 py-6 shadow-xl rounded-lg bg-slate-50 flex flex-col flex-1 items-center justify-center'>

<h2 className="text-3xl font-bold mb-5 ">Chunk<span className="text-blue-600">Z</span></h2>

      <div className=' flex flex-col justify-center items-center w-full'>

    <div className='flex items-center w-full'>
        <Label className='text-slate-800 text-xl mr-3 whitespace-nowrap'>Title: </Label>
        <Input className='w-full flex-1 rounded-xl ' name='title'  placeholder='Title' />
    </div>

    <div className='mt-7 flex items-start w-full'>
      <Label className='text-slate-800 text-xl mr-3 whitespace-nowrap'>Code: </Label>
      <Textarea style={{ height: '200px' }} className='w-full flex-1 rounded-xl' name='title' placeholder='Title' />
    </div>

    <div className='w-full mt-8'>
        <Button className='bg-slate-800 w-full rounded-2xl' variant='default'>Create</Button>
    </div>

      </div>
    </div>
  )
}

export default CreateChunkComp
