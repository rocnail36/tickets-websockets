const express = require("express")
const path = require("path")
const http = require('http');
const cors = require("cors");
const TicketList = require("../models/TicketList");

class Server  {

        constructor(){
            this.App = express()
            this.App.use(express.static(path.join(__dirname,"../public")))
            this._server = http.createServer(this.App,{cors})
            this.Port = 8080
            this.App.use(cors())
        }

        routes(){
            this.App.get("/tickets", (req,res) => {

                res.json(TicketList.getLastTickets)

            })
        }
    

        start(){
            this.server.listen(this.Port,() => {
                console.log("server running")
            })

        }

        get server(){
            return this._server
        }

}


module.exports = Server