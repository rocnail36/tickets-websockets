import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import {useParams} from "react-router-dom"

export const Desktop = () => {

    const {id} = useParams()

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
  <div className='h-[80%] w-[80%] bg-white flex flex-col py-8'>
   <Button className="text-white bg-red-400 px-6 py-2 rounded-xl self-end mr-8 uppercase hover:bg-red-800">salir</Button>
  <div className="px-8 pb-4">
  <p className="font-semibold text-3xl mb-4">Jose Rojas</p>
    <div className="flex gap-4 items-center">
    <p>Usted esta trabajando en el escritorio:</p>
    <p className="text-slate-800 font-bold text-2xl">{id}</p>
    </div>
  </div>
 
   <hr className="mb-8"/>
   <div className="flex gap-4 items-center px-8">
    <p>Usted esta atendiendo al ticket:</p>
    <p className="text-slate-800 font-bold text-2xl">4</p>
    </div>
   <Button className="text-white bg-green-400 hover:bg-green-800 px-6 py-2 rounded-xl self-end mr-8 uppercase ">
    siguiente 
   </Button>

</div>
    </div>
  )
}
