import { CardTicket } from '@/components/CardTicket'




const LineTicket = () => {

  return (
    <div  className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className='h-[80%] w-[80%] bg-white flex  py-8'>
            <div className='w-[50%] items-center flex flex-col'>
                <p className='text-2xl font-semibold mb-8'>Atendiendo al cliente</p>
                <div>
                   <CardTicket ticketNumber={1}/>
                </div>
            </div>
            <div className='w-[50%] justify-center flex'>
                <p className='text-2xl font-semibold mb-8'>historial</p>
                <div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default LineTicket