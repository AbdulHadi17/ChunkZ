import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div  className="text-slate-800 p-6 shadow-xl rounded-lg bg-slate-50 flex flex-col flex-1 items-center justify-center">
      
<div className=""> <h1 className="font-bold text-3xl text-slate-800 text-left">Home</h1>

</div>
<div className="flex w-full mt-3 justify-between items-center text-xl font-bold">
<h2 className="">Chunk<span className="text-blue-600">Z</span></h2>
 <Link href="/create/new">
  <Button variant="destructive" className=" font-medium rounded-3xl">New +</Button>
</Link>
  </div>
<div className="mt-5 w-full p-3 shadow-md">


</div>

   </div>  );
}
