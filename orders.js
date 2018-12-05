var events = require('events');
var evConfig = require('./config').events;
const MAX = 20;

// class Orders counts orders and emits events
class Orders extends events.EventEmitter{
    constructor(){
        super();
        this.counter = 0;
    }

    reset(){
        this.counter = 0;
        this.emit(evConfig.ORDER_RESET);
    }

    increase(){
        if(this.counter == MAX){
            this.emit(evConfig.ORDER_CAPPED);
        }
        else{
            this.counter++;
            this.emit(evConfig.ORDER_INCREASE);
        }
    }

    decrease(){
        if(this.counter == 0){
            this.emit(evConfig.ORDER_EMPTY);
        }
        else{
            this.counter--;
            this.emit(evConfig.ORDER_DECREASE);
        }
    }

    getAll(){
        this.emit(evConfig.ORDER_GETALL, this.counter);
    }
}

module.exports = () => {
    return new Orders();
}