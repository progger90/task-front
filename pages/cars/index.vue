<template>
  <div class="col-8 m-auto">
    <div class="input-group mt-5">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>

    <table class="table table-bordered mt-5">
      <thead>
      <tr>
        <th>Mark</th>
        <th>Model</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(car,index) in cars">
        <td v-for="(item,key) in car" v-if="key == 'mark' || key == 'model' || key == 'color'">
          <a href="#" @click.prevent="openCar(index)">
            <div class="form-check" role="button">
              <!--input v-if="key == 'mark'" class="form-check-input" type="checkbox" value="" :id="cars[index].id" role="button"-->
              <label class="form-check-label" :for="cars[index].id" role="button">{{ item }}</label>
            </div>
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check-def2">
            <label class="form-check-label" for="check-def2">Test1</label>
          </div></td>
        <td>Test 2</td>
      </tr>
      </tbody>
    </table>
    <div class="mt-5 d-flex justify-content-md-end">
      <button class="btn btn-success">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  async fetch({store}){
    await store.dispatch('cars/getCars');
  },
  computed: {
    cars(){
      return this.$store.getters['cars/cars'];
    }
  },
  methods: {
    openCar(id)
    {
      this.$router.push('/cars/' + id);
    }
  },
}
</script>

<style scoped>

</style>
