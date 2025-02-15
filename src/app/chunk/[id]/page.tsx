import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'


const viewChunkPage = async ({params}:{params:Promise<{id:string}>}) => {
  
    const chunkID:number = parseInt((await params).id);

    const chunk = await prisma.chunk.findUnique({
        where:{
            id:chunkID
        }
    })

    if(!chunk) return (<div className='flex justify-center items-center font-bold text-3xl'>Chunk not found</div>)
  
    return (
    <div className='mx-auto p-6 bg-slate-100 w-full flex flex-col gap-8 rounded-xl'>
        <div className='flex justify-between items-baseline'>

        <div>
            <h3 className='font-bold font-mono text-xl text-slate-800 text-left'>{chunk.title}</h3>
        </div>

            <div className='flex justify-center items-center gap-2'>
        <Link href={`/chunk/${chunk.id}/edit`}><Button className='rounded-3xl' variant={'default'}>Edit</Button></Link>
                <Button className='rounded-3xl' variant={'destructive'}>Delete</Button>
            </div>
        </div>
        <div className='flex-1 px-6 py-6 bg-slate-50 rounded-xl'>
        <pre>
            <code>
                {chunk.code}
            </code>
        </pre>
        </div>
    </div>
  )
}

export default viewChunkPage
