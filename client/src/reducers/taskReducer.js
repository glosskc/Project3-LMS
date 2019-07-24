const INITIAL_STATE = { all: [], task: {} };

let idCounter = 0;
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "ADD_TASK":
    console.log("action: ", action)
    console.log("state in reducer: ", state)
    return Object.assign({}, state, {
      all: [
          ...state.all, {
            text: action.text,
            id: idCounter++
          }
        ]
    })

    case "REMOVE_TASK":
    console.log("action: ", action)
    console.log("state in reducer: ", state)
    return Object.assign({}, state, {
      all: [
        ...state.all.slice(0, action.id),
        ...state.all.slice(action.id + 1)
      ]
    })

    default:
      return state;
  }
}