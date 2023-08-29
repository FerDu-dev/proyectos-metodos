import Queue from '../Queue.js'

class LoadBalancer {
  constructor (servers) {
    this.servers = servers
    this.queue = new Queue()
  }

  addRequest (request) {
    this.queue.enqueue(request)
  }

  processRequests () {
    while (!this.queue.isEmpty()) {
      const request = this.queue.dequeue()
      const server = this.getNextAvailableServer()
      server.processRequest(request)
    }
  }

  getNextAvailableServer () {
    let minLoad = Infinity
    let nextServer = null
    for (const server of this.servers) {
      if (server.load < minLoad) {
        minLoad = server.load
        nextServer = server
      }
    }
    return nextServer
  }
}

class Server {
  constructor (id) {
    this.id = id
    this.load = 0
    this.requestsProcessed = 0
  }

  processRequest (request) {
    //this.load += request.data.id;
    this.load ++
    this.requestsProcessed++
  }
}

class Request {
  constructor (data) {
    this.data = data
  }
}

function generateRandomData () {
  const randomNumber = Math.floor(Math.random() * 100) + 1

  const requestData = {
    id: randomNumber,
    type: 'request',
    data: `Request data ${randomNumber}`
  }
  console.log('Request: ', requestData)
  return requestData
}

// Crear una lista de servidores
const servers = [new Server(1), new Server(2), new Server(3)]

// Crear una instancia de la clase LoadBalancer
const loadBalancer = new LoadBalancer(servers)

// Agregar varias solicitudes a la cola
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
loadBalancer.addRequest(new Request(generateRandomData()))
// Procesar las solicitudes en la cola
loadBalancer.processRequests()

// Verificar cómo se distribuyen las solicitudes entre los servidores disponibles
for (const server of servers) {
  console.log(`Server ${server.id} processed ${server.requestsProcessed} requests`)
}

// const requestData = generateRandomData()
// const request = new Request(requestData)
// loadBalancer.addRequest(request)
