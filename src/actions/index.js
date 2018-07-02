export const addContestant = (payLoad) => {
  return {
    type: 'ADD_CONTESTANT',
    payLoad
  }
}
export const voteReact = () => {
  return {
    type: 'VOTE_REACT'
  }
}
export const voteVuejs = () => {
  return {
    type: 'VOTE_VUEJS'
  }
}