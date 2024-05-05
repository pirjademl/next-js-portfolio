import {FC} from 'react'
import {Card,CardHeader,CardContent,CardTitle,CardFooter} from '../../ui/card'
import Image from 'next/image'
import { Code } from 'lucide-react'
export interface IOthersProps{
    }
export const OthersSection:FC<IOthersProps>=()=>{

        return(
        <section>
  <span className="mt-4 mb-4">Others</span>
  <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
  <Card>
  <CardHeader>
  <Image src='/figma.png' height={400} width={900} alt="figma image"/>
  </CardHeader>
    <CardContent>
    <CardTitle>
       Figma 
    </CardTitle>
    <div className="flex gap-2 items-center">
    <Code color="#818087"/>
     <span> 2 days ago</span>
     </div>
     </CardContent>
     </Card>
  <Card>
  <CardHeader>
  <Image className="aspect-video" src='/rest.webp' height={400} width={900} alt="figma image"/>
  </CardHeader>
    <CardContent>
    <CardTitle>
       REST  API
    </CardTitle>
    <div className="flex gap-2 items-center">
    <Code color="#818087"/>
     <span> 2 days ago</span>
     </div>
     </CardContent>
     </Card>
 
     </div>
     </section>
        )
    }

