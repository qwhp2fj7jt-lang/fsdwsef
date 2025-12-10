import {Card} from "@/widgets"
import {project} from "@/shared"
export default function Projects(){
    return(
<div className="container mx-auto  pt-[5%] pl-[10%] pr-[10%]">
        <h2 className="text-3xl font-bold mb-6">Projeler</h2>
       
               <div className="grid md:grid-cols-2 gap-4 pb-5">
                 <Card project={project} />
     
               </div>   
        </div>
    )
}