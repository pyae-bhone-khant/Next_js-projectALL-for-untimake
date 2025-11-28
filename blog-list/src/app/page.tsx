import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
       <div className="flex justify-center mt-15 text-center items-center flex-col">
        <Button className="bg-purple-200 border w-20 text-purple-700 rounded-2xl text-sm">Our blog</Button>
        <p className="mt-10  text-2xl font-bold text-purple-900">Resources and insights</p>
        <p className="mt-4 text-sm text-purple-400" >The latest industry news, interviews techlogies, and resources</p>
        <Input type="search" placeholder="Search ....." className="w-90 border border-purple-400 rounded-2xl mt-10" />

       </div>
  );
}
