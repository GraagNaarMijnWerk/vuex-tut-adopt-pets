import state from './state'

export default { // a function to change the state
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
