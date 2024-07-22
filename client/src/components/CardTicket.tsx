import React from 'react'
import {
    Card,
    CardContent,
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
    <Card  >
  <CardHeader className={`text-center ${!name ? "py-2" : ""}`}>
    <CardTitle className={!name ? "text-md" : ""}>Ticket {ticketNumber}</CardTitle>
  </CardHeader>
   
   {
    desktopNumber &&  <CardContent>
                 <p>escritorio: {desktopNumber}</p>
                 <p>atendido por : {name}</p>
                </CardContent>
   }
  
 
</Card>

  )
}
