export function addClient(text) {
    return {
      type: "ADD_CLIENT",
      text: text
    }
}

export function removeClient(id) {
    console.log("ID in actions.js", id)
    return {
      type: "REMOVE_CLIENT",
      id: id
    }
}

export function addTask(text) {
    return {
      type: "ADD_TASK",
      text: text
    }
}

export function removeTask(id) {
    console.log("ID in actions.js", id)
    return {
      type: "REMOVE_TASK",
      id: id
    }
}