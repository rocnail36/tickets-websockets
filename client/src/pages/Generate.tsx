import { SocketContext } from "@/providers/SocketProvider"
import { useContext, useEffect, useState } from "react"


export const Generate = () => {
  const {socket} = useContext(SocketContext)
  const [numberTicket, setnumberTicket] = useState(0)

  const generateTicket = () => {
    const number = numberTicket + 1
    socket.emit("createTicket",number,() => {
      setnumberTicket(number)
    })
  }


  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
           <div className='w-[80%] h-[80%] bg-white flex flex-col items-center py-24 justify-around px-4'>
               <div className='flex flex-col items-center'>
               <h1 className='text-4xl font-bold mb-8'>Presione el boton para generar un ticket</h1>
                 <button onClick={generateTicket} className='text-white bg-blue-400 flex gap-2 px-8 py-4 rounded-2xl'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                 <p className='font-semibold'>GENERAR TICKET</p>
                 </button>
               </div>
               <div className='flex flex-col items-center'>
                <p className='font-semibold text-2xl'>Su numero</p>
                <p className='text-[90px] font-bold text-green-400'>{numberTicket}</p>
               </div>
           </div>
    </div>
  )
}
