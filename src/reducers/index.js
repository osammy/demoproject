const initialState = {
            contestants: [{ name: "Nnamdi", decription: "This is a very gentle man", votes: 0, votePercent: 0 }, { name: "dafe", votes: 0, decription: "This is the king of javascript in NESA", votePercent: 0 },
            { name: "Bukola", votes: 0, decription: "She is determined to get better at javascript", votePercent: 0 }
            ]
        }
export const contestantReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTESTANT':
// const ob = { name: "Okwukwe", decription: "Mr responsive", votes: 0, votePercent: 0 }
console.log(state.contestants)
      return state.contestants.concat(action.payLoad);
    case 'VOTE_REACT':
      console.log("Your choice is React!")
      return Object.assign({}, state, {
        react: state.react + 1
      })
    case 'VOTE_VUEJS':
      console.log("Your choice is Vue.js")
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      })
    default:
      return state
  }
}

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTESTANT':
      console.log("Your choice is Angular!")
      return [...state,action.payLoad]
    case 'VOTE_REACT':
      console.log("Your choice is React!")
      return Object.assign({}, state, {
        react: state.react + 1
      })
    case 'VOTE_VUEJS':
      console.log("Your choice is Vue.js")
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      })
    default:
      return state
  }
}