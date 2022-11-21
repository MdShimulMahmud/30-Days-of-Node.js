const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("events", () => console.log("event fired"));

myEmitter.emit("events");
