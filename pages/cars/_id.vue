<template>
  <section>
    <h1>Car</h1>
    <hr>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-6" v-for="(value,key) in car" v-if="checkInExceptionList(key) && Object.keys(car).length > 0">
            <label class="form-label text-capitalize">{{ key }}</label>
            <input v-model="car[key]" :type="getInputType(key)" class="form-control">
          </div>
          <div class="text-center col-md-12 mt-4">
            <button class="btn btn-success" @click.prevent="updateCar()">Сохранить</button>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "_id",
  data() {
    return {
      //carClone: {}, // = message.clone()
    }
  },
  async fetch({store,params}){
    //if(store.getters['cars/cars'].length === 0) {
      await store.dispatch('cars/getCar', params);
    //} else {
    //  await store.dispatch('cars/getCarFromCars', { id:params.id});
    //}
  },
  // async asyncData({ $axios,params }){
  //   const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
  //   return {user};
  // },
  methods: {
    async updateCar(){
      await this.$store.dispatch('cars/updateCar', this.car);
    },
    changeMyObj(key, evt){
      this.$store.commit('cars/changeMyObj', {key: key, value: evt.data})
    },
    getInputType(key){
      if(key == 'year'){
        return 'number';
      } else {
        return 'text';
      }
    },
    checkInExceptionList(index){
      var exception_list = ['id','updated_at','created_at','created_at','car_properties'];
      return exception_list.indexOf(index) == -1 ? true : false;
    }
  },
  validate({params}){
    return /^\d+$/.test(params.id);
  },
  computed:{
    cars(){
      return this.$store.getters['cars/cars'];
    },
    // car:{
    //   get() {
    //     return this.$store.getters['cars/car'];
    //   },
    //   set(car) {
    //     this.$store.dispatch('cars/updatePerson', car)
    //   }
    //   //return this.$store.state['cars/car'];
    // },

    car() {
      return this.$store.getters['cars/car'];
      // get() {
      //   // Or remove mapState and use this.$store.state.values.example
      //   return this.$store.getters['cars/car'];
      // },
      // set(car) {
      //   console.log(car);
      //   this.$store.commit("cars/setValues", { car });
      // },
    }

  },
  created(){
    //console.log(this.$store.getters['cars/car']);
    //this.carL = this.$store.getters['cars/car'];
    //this.carClone = this.$store.getters['cars/car'].clone()
  },
}
</script>

<style scoped>

</style>
