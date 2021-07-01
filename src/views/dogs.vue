<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs"> <!-- populate table with dogs array -->
      <template v-slot:cell(name)="data"> <!-- make items clickable links -->
        <a :href="`pets/dogs/${data.index}`">{{ data.value }}</a> <!-- click changes {route} and {{page}} -->
        <!-- {1} you pass the link you want it to go to which should be defined in the routes, which is partly made up out of data which link you clicked: the index. routes simply points to the dogs.vue component. so here is the most important part where a click becomes an action of direction. {{2}} out of the link you clicked we also take the value from the array which corresponds to the index and make it available for show on page further defined in dogs.vue template, which are all the elements: all pet objects. -->
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex' // importing the mapState function for use only. no need to import an individual component like state.js. later we just point to the required array by passing the array name as an argument to the function

export default {
  computed: {
    ...mapState(['dogs']) // we map (take) the state we imported from store/state.js using the imported mapState function so we can use the array dogs in dogs.vue like we would use a data object. and we're spreading the different arguments into the fuction parameters.
  }
}
</script>
