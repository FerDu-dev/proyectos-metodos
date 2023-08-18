class Queue{

    constructor(){
    this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element)
    }

    isEmpty() {
        return this.items.length === 0;
    }

    dequeue(){
        if(this.isEmpty()){
            return "No element in Queue"
        }
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No elements in Queue"
        }
        return this.items[0];
    }

    printQueue(){
        var str = "";
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] + "";
        }
        return str
    }


    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }

    reverse(){
        return this.items.reverse();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    search(element){
        for(var i = 0; i < this.items.length; i++){
            if(this.items[i] == element){
                return true 
            }
        }
        return false
    }

    remove(element){
        for(var i = 0; i < this.items.length; i++){
            if(this.items[i] == element){
                this.items.splice(i, 1);
                return true
            }
        }
        return false
    }
}


class LoadBalancer {
    constructor(servers) {
        this.servers = servers;
        this.queue = new Queue();
    }

    addRequest(request) {
        this.queue.enqueue(request);
    }

    processRequests() {
        while (!this.queue.isEmpty()) {
            let request = this.queue.dequeue();
            let server = this.getNextAvailableServer();
            server.processRequest(request);
        }
    }

    getNextAvailableServer() {
        let minLoad = Infinity;
        let nextServer = null;
        for (let server of this.servers) {
            if (server.load < minLoad) {
                minLoad = server.load;
                nextServer = server;
            }
        }
        return nextServer;
    }
}

class Server {
    constructor(id) {
        this.id = id;
        this.load = 0;
        this.requestsProcessed = 0;
    }

    processRequest(request) {
        this.load++;
        this.requestsProcessed++;
    }
}

class Request {
    constructor(data) {
        this.data = data;
    }
}

function generateRandomData() {
   
    let randomNumber = Math.floor(Math.random() * 100) + 1;

   
    let requestData = {
        id: randomNumber,
        type: 'request',
        data: `Request data ${randomNumber}`
    };
    console.log("Request: ", requestData)
    return requestData;
}




// Crear una lista de servidores
let servers = [new Server(1), new Server(2), new Server(3)];

// Crear una instancia de la clase LoadBalancer
let loadBalancer = new LoadBalancer(servers);

// Agregar varias solicitudes a la cola
loadBalancer.addRequest(new Request(generateRandomData()));
loadBalancer.addRequest(new Request(generateRandomData()));
loadBalancer.addRequest(new Request(generateRandomData()));
loadBalancer.addRequest(new Request(generateRandomData()));
loadBalancer.addRequest(new Request(generateRandomData()));
loadBalancer.addRequest(new Request(generateRandomData()));
// Procesar las solicitudes en la cola
loadBalancer.processRequests();

// Verificar cómo se distribuyen las solicitudes entre los servidores disponibles
for (let server of servers) {
    console.log(`Server ${server.id} processed ${server.requestsProcessed} requests`);
}

let requestData = generateRandomData();
let request = new Request(requestData);
loadBalancer.addRequest(request);