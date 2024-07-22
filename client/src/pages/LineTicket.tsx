import { CardTicket } from '@/components/CardTicket'
import { SocketContext } from '@/providers/SocketProvider'
import { useContext, useEffect, useState } from 'react'


type ticket = {
  id:number,
  number:number,
  user:string,
}

const LineTicket = () => {
  const {socket} = useContext(SocketContext)
  const [tickets, settickets] = useState<ticket[]>()

  useEffect(() => {
      const getTickets = async() => {
        const res  = await fetch("http://localhost:8080/tickets",{
          method:"GET",

        })
        const tickets = await res.json()
        settickets(tickets)
      }

      getTickets()
  },[])

  useEffect(() => {
    socket.on("tickets",(data) => {
      console.log("golaaaaaa")
      settickets(data)
    })
  },[])



  return (
    <div  className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className='h-[80%] w-[80%] bg-white flex  py-8'>
            <div className='w-[50%] items-center flex flex-col'>
                <p className='text-2xl font-semibold mb-8'>Atendiendo al cliente</p>
                <div className='flex flex-col gap-4 overflow-y-scroll'>
                  {tickets?.slice(0,3).map(ticket => (
                    <CardTicket ticketNumber={ticket.number} desktopNumber={ticket.number} name={ticket.user}/>
                  ))}
                </div>
            </div>
            <div className='w-[50%]  flex flex-col items-center'>
                <p className='text-2xl font-semibold mb-8'>historial</p>
                <div className='flex flex-col gap-4'>
                  {tickets?.slice(3,13).map(ticket => (
                    <CardTicket ticketNumber={ticket.number}/>
                  ) )}
                </div>
            </div>

        </div>
    </div>
  )
}

export default LineTicket