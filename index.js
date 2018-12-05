var http = require('http');
var Orders = require('./orders');
var Controller = require('./controller');
var evConfig = require('./config').events;

var ords = Orders();
var ctrl = Controller.ctrl();

// create server on port 8080
http.createServer((req, res) => {
    res.writeHead(200);
    res.write(Controller.data);
    res.end();
}).listen(8080);

// configure events
ords.on(evConfig.ORDER_RESET, ctrl.printReset);
ords.on(evConfig.ORDER_INCREASE, ctrl.printIncrease);
ords.on(evConfig.ORDER_DECREASE, ctrl.printDecrease);
ords.on(evConfig.ORDER_CAPPED, ctrl.printCapped);
ords.on(evConfig.ORDER_EMPTY, ctrl.printEmpty);
ords.on(evConfig.ORDER_GETALL, ctrl.printGetAll);

// demo
ords.increase();
ords.getAll();
ords.decrease();
ords.decrease();
ords.getAll();
for(let i = 0; i<21;i++){
    ords.increase();
}
ords.getAll();
ords.reset();