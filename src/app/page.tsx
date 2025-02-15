import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const codeList = await prisma.chunk.findMany();

  return (
   <div className=" lg:mx-[20vw] text-slate-800 p-6 shadow-xl rounded-lg bg-slate-50 flex flex-col flex-1 items-center justify-center">
      
<div className=""> <h1 className="font-bold text-3xl text-slate-800 text-left">Home</h1>

</div>
<div className="flex w-full mt-3 justify-between items-center text-xl font-bold">
<h2 className="">Chunk<span className="text-blue-600">Z</span></h2>
 <Link href="/chunk/new">
  <Button type="submit" variant="destructive" className=" font-medium rounded-3xl">New +</Button>
</Link>
  </div>
<div className="mt-5 w-full p-3 shadow-md">
{
  codeList && codeList.map((chunk)=>{
    return (
      <div key={chunk.id} className=" flex justify-between items-center p-3 bg-slate-100 rounded-lg my-3">
        <div className="flex flex-col">
        <h3 className="text-md text-slate-950 font-normal">{chunk.title}</h3>
        </div>
        <div>
          <Link href={`/chunk/${chunk.id}`}><Button variant="ghost" className="rounded font-bold">View</Button></Link>
        </div>
        
      </div>
    )
  })
}

</div>

   </div>  );
}
