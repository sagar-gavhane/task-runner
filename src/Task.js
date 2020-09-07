import tb from "./TaskBucket"
import generateRandomId from "./generateRandomId"

class Task {
  static instanceCount = 0

  constructor() {
    Task.instanceCount++

    this.label = `TASK_${Task.instanceCount}`
    this.id = generateRandomId()
    this.state = "waiting"

    tb.enqueue(this)
    this.paint()
  }

  paint() {
    const list = document.getElementById("task-list")
    const textNode = document.createTextNode(`${this.label}: ${this.state}`)
    const listElementNode = document.createElement("li")
    listElementNode.appendChild(textNode)
    listElementNode.setAttribute("data-state", this.state)
    listElementNode.setAttribute("data-id", this.id)
    list.appendChild(listElementNode)
  }
}

export default Task
