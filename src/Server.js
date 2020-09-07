import taskBucket from "./TaskBucket"
import generateRandomId from "./generateRandomId"

class Server {
  static instanceCount = 1

  constructor() {
    if (Server.instanceCount > 10) {
      throw new Error("Maximum 10 server instances is allowed.")
    }

    this.id = generateRandomId()
    this.label = `SERVER_${Server.instanceCount}`

    Server.instanceCount++
    this.scan()
  }

  scan() {
    let task = null
    console.log(`Server (${this.label}) is scanning for the next task.`)

    const interval = setInterval(() => {
      // pickup one task at a time and process it
      task = taskBucket.dequeue()

      // if there is no task exist then keep scaning for next task
      if (typeof task !== "undefined") {
        clearInterval(interval)
        this.processTask(task)
      }
    }, 100)
  }

  processTask(task) {
    console.log(
      `Server (${this.label}) started processing tasks: ${task.label}.`
    )

    const twentySeconds = 20 * 1000
    const listElementNode = document.querySelector(
      `#task-list [data-id='${task.id}']`
    )
    listElementNode.setAttribute("data-state", "processing")
    listElementNode.innerHTML = `${task.label}: processing (timer: 1)`
    let timer = 1

    let interval = setInterval(() => {
      listElementNode.innerHTML = `${task.label}: processing (timer: ${timer})`
      timer++
    }, 1000)

    setTimeout(() => {
      // remove task and interval after 20 seconds
      clearInterval(interval)
      listElementNode.remove()
      this.destory()
    }, twentySeconds)
  }

  destory() {
    console.log(`Server (${this.label}) has been destroyed.`)
    Server.instanceCount--
  }
}

export default Server
