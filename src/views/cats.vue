<template>
    <div>
      <PetTable 
      species="cats" 
      :pets="cats"
      /> <!--
        :pets="cats" this cats points to an array, since we're using v-bind, it's looking for a variable so its pullng the cats off of computed,
        while species="cats" is just standard static html, telling the species attribute = the string cats.
      -->
    </div>
</template>

<script>
/*
this was the old template which i placed here in script just to use the commenting.
<template>
    <div>
      <!--<p>difgerfewfi</p> dit was een test of die wel een p wou weergeven-->
      <h1>Cats for Adoption</h1>
      <b-table striped hover :items="cats"> <!-- populate table with cats array -->
        <template v-slot:cell(name)="data"> <!-- make items clickable links-->
          <!-- <router-link:to="`/pets/${data.value}`">{{ data.value }}</router-link> -->
          <a :href="`pets/cats/${data.index}`">{{ data.value }}</a> <!-- click changes route and page-->
      </template>
      </b-table>
      <h1>"cats"</h1>
    </div>
</template>
*/
// import cats from '../data/cats.js' // @ means source directory. no need for filetype.
import { mapState } from 'vuex' // importing the mapState function for use only. no need to import an individual component like state.js. later we just point to the required array by passing the array name as an argument to the function
import PetTable from '@/components/PetTable.vue'

export default {
  /* obsolete
  data () {
    return {
      cats: cats // the 2nd cats points to the one imported. 1st is data var.
    }
  },
  */
  components: {
    PetTable
  },
  computed: {
    ...mapState(['cats']) // we map (take) the state we imported from store/state.js using the imported mapState function so we can use the array dogs in dogs.vue like we would use a data object. and we're spreading the different arguments into the fuction parameters.
    // instead of simply pointing to the cats from data, we're simply pointing to the state.js with the mapState function. hier halen we de array cats uit de state niet uit de data hier in cats.vue. zoals we hier zien zijn de arguments voor array de verpreidde elements ('spread'  ...)  uit de cats array. wat dus de verschillende objects zijn. IIG kunnen we nu de data object weg commenten die hebben we nu even niet meer nodig.de extra [] lijkt me op dit moment overbodig want cats is al een array, maar ach, misschien is het omdat op deze manier zorgen we dat hij de objects uitpakt met spread ... en niet de array cats zelf?? en is het niet zelfs zo dat we eerst een array uitpakken met ... en daarna weer erinstoppen met []?
  }
}
/* obsolete
console.log(cats == null) // false dus hij ontvangt de object wel, maar dat kreeg ik ook toen ie hem niet ontving door missende / voor de routes.
*/
</script>
