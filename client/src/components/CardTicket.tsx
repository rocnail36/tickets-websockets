import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


  type Props = {
    name?:string,
    desktopNumber?:number,
    ticketNumber: number
}


export const CardTicket = ({desktopNumber,name,ticketNumber}:Props) => {


  return (
    <Card>
  <CardHeader className='text-center'>
    <CardTitle>Ticket {ticketNumber}</CardTitle>
  </CardHeader>
   
   {
    desktopNumber &&  <CardContent>
                 <p>escritorio: 2</p>
                </CardContent>
   }
  
  {name && <CardFooter>
    <p>atendido por : fernando</p>
           </CardFooter>}
</Card>

  )
}
