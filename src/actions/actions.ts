"use server"

import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export const saveChunk = async (id:number, code:string)=>{
await  prisma.chunk.update({
    where:{
        id:id
    },
    data:{
        code:code
    }
})

redirect(`/chunk/${id}`);

}

export const deleteChunk = async (chunkID:number)=>{

    await prisma.chunk.delete({
        where:{
            id:chunkID
        }
    });

    redirect('/');
}


export const handleSubmit = async (prevState:{message:string},formData:FormData)=>{
    
    const title = formData.get('title');
    const code = formData.get('code');

    if(typeof title !== 'string' || typeof code !== 'string' || title.length < 3 || code.length < 6){
    return {message:'Invalid form data'};
    }

    const chunk = await prisma.chunk.create({
    
      data:{
        title,
        code
      }
    
    });
    console.log(chunk) ;
    redirect('/');
    return {message:'Chunk created'};
    
  }
