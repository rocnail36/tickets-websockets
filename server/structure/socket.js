const cors = require("cors")


const {Server} = require('socket.io')
const TicketList = require("../models/TicketList")

class Socket {

constructor(server){

    this.io = new Server(server,{
        cors:{
            origin:"http://localhost:5173"
        }
    })

}


 start(){

    this.io.on("connection", (socket) => {
      
       
    

        socket.on("createTicket", (number,callback) => {
            TicketList.createTicket(number)
            callback()
            console.log(TicketList.Pendents)
        })

        socket.on("nextTicket",(data,callback) => {
            callback(TicketList.assignTicket(data))
            this.io.emit("tickets",TicketList.getLastTickets)
        })

        




    })

 }


}

module.exports = Socket