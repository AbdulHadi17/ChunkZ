import TextEditor from '@/components/TextEditor'
import React from 'react'
import prisma from '@/lib/prisma';

const editChunkPage = async ({params}:{params:Promise<{id:string}>}) => {
  
  const chunkID:number = parseInt((await params).id);

  const chunk = await prisma.chunk.findUnique({
    where: {
      id: chunkID
    }
  })

  if(!chunk){ return (<div>Chunk Not Found.</div>)}
  
  
  return (
    <div>
      <TextEditor chunk={chunk}  />
    </div>
  )
}

export default editChunkPage
