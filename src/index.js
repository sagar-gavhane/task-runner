import taskBucket from "./TaskBucket"
import Server from "./Server"
import Task from "./Task"

// add server
document.getElementById("add-server").addEventListener("click", () => {
  const server = new Server()
})

// add task
document.getElementById("add-task").addEventListener("click", () => {
  const task = new Task()
})

// delete task
document.getElementById("task-list").addEventListener("click", (event) => {
  const { target } = event

  // if target is li element and task is in waiting state then user can able to delete it
  if (target.nodeName === "LI" && target.dataset.state === "waiting") {
    taskBucket.remove(target.dataset.id)
    target.remove()
  }
})
