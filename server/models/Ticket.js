const uuid = require("uuid").v4

class Ticket {

    constructor(number){
        this.id = uuid(),
        this.number = number
        this.desktop = null,
        this.user = null
    }

}


module.exports = Ticket