'use client'

import { Editor } from '@monaco-editor/react'
import React from 'react'
import { Button } from './ui/button'
import type{Chunk} from '@prisma/client'
import { useState } from 'react'

const saveChunk = async ()=>{
  // "use server"

  console.log('submitting chunk')
}




const TextEditor = ({chunk}:{chunk:Chunk}) => {

  const [code, setCode] = useState(chunk.code);



  return ( <form action={saveChunk}
   className='flex flex-col gap-6 mx-auto p-6 bg-slate-100 w-full rounded-xl'>
    <div className='flex justify-between items-center gap-4'>
    <h3 className='font-bold font-mono text-xl text-slate-700 text-left'>{chunk.title}</h3>
    <Button type='submit' className='rounded-3xl bg-slate-700' variant={'default'}>Save</Button>
    </div>
    
    <div>
    <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme='vs-dark'
        defaultValue= {code}
        />
    
    </div>
    </form>
    )
}

export default TextEditor
