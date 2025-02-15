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