class TaskBucket {
  tasks = []

  enqueue(task) {
    this.tasks.push(task)
    console.log("task bucket:", this.tasks)
  }

  dequeue() {
    if (!this.tasks.length) return
    console.log("task bucket:", this.tasks)

    return this.tasks.shift()
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }
}

export default new TaskBucket()
