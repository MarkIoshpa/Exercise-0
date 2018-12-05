exports.data = "";

// class Controller contains methods that are called on an event
class Controller{
    printReset(){
        let msg = "Counter is reset to 0.";
        exports.data += msg + "\n";
        console.log(msg);
    }

    printIncrease(){
        let msg = "Counter has been increased.";
        exports.data += msg + "\n";
        console.log(msg);
    }

    printDecrease(){
        let msg = "Counter has been decreased.";
        exports.data += msg + "\n";
        console.log(msg);
    }

    printCapped(){
        let msg = "Counter is at maximum capacity, can't increase.";
        exports.data += msg + "\n";
        console.log(msg);
    }

    printEmpty(){
        let msg = "Counter is empty, can't decrease.";
        exports.data += msg + "\n";
        console.log(msg);
    }

    printGetAll(info){
        let msg = "Info: Counter = " + info;
        exports.data += msg + "\n";
        console.log(msg);
    }
}

exports.ctrl = () => {
    return new Controller();
}