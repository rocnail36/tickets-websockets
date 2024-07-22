const Ticket = require("./Ticket")


class TicketList {

   
       static Pendents = []
       static Active = []

       static createTicket(number){
        const ticket = new Ticket(number)
        this.Pendents.push(ticket)
        return [this.Active,this.Pendents]
       }


       static assignTicket(data){
              if(this.Pendents.length == 0){
                     return "no hay tickets pendientes"
              }
              const {desktop,user} = data
              const ticket = this.Pendents.shift()
              ticket.user = user
              ticket.desktop = desktop
              this.Active.unshift(ticket)
              return ticket.number

       }

       static get getLastTickets(){
         return this.Active.slice(0,13)
       }






}


module.exports = TicketList