// Clase Queue con los métodos tradicionales
// Exportamos la clase Queue para su uso en el ejercicio 1
export default class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  isEmpty () {
    return this.items.length === 0
  }

  dequeue () {
    if (this.isEmpty()) {
      return 'No element in Queue'
    }
    return this.items.shift()
  }

  front () {
    if (this.isEmpty()) {
      return 'No elements in Queue'
    }
    return this.items[0]
  }

  printQueue () {
    let str = ''
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ''
    }
    return str
  }

  size () {
    return this.items.length
  }

  clear () {
    this.items = []
  }

  reverse () {
    return this.items.reverse()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  search (element) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === element) {
        return true
      }
    }
    return false
  }

  remove (element) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === element) {
        this.items.splice(i, 1)
        return true
      }
    }
    return false
  }
}
