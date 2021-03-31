export const state = () => ({
  cars: [],
  car: {}
})

export const mutations = {
  setCars(state, cars){
    state.cars = cars;
  },
  setCar(state, car){
    //changeMyObj(state, objInput) {
      //state.car[objInput.key] = objInput.value
    //}
    //console.log('set car');
    state.car = car;
  },
  changeMyObj(state, objInput) {
    state.car[objInput.key] = objInput.value
  },
  setValues(state, values) {
    state.car = Object.assign({}, state.car, values);
  },
  updatePerson(state, payload) { state.car = Object.assign(state.car, payload) }
}

export const actions = {
  async getCars({ commit }){
    const cars = await this.$axios.$get('http://localhost:8089/api/cars')
    commit('setCars',cars);
  },
  async getCar({ commit }, params){
    const car = await this.$axios.$get('http://localhost:8089/api/cars/'+params.id)
    commit('setCar',car);
  },
  async updateCar({ commit }, params){
    const car = await this.$axios.$post('http://localhost:8089/api/cars/update/'+params.id, params)
    commit('setCar',car);
  },
  updatePerson: ({ commit }, payload) => commit('updatePerson', payload)
}

export const getters = {
  cars: s => s.cars,
  car: s => s.car
}
