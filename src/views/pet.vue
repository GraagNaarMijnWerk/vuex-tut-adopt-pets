<template>
  <div>
    <!-- obsolete, we changed this to pet().name which we derived from the state and method here instead of the route
    {{ $route.params.species}}
    {{ $route.params.id}} --these show us that we have access to species and id here. from the route params.
    -->
    <!-- obsolete, we changed this to animal.name .
    {{ pet().name }} <-- not animal.name, we return the value of an object that is returned from a function. Hey you see! You can make a function return an object and then just put the function in between double moustaches to print its return, and you can even return a piece of the object you return, like .name!
    -->
    <h1>{{ animal.name }} ({{$route.params.species}})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    /* could also have done instead of ...mapState([]) a function:
    cats() {
      return this.$store.state.cats
    }
    */
    ...mapState([
      'cats',
      'dogs'
    ]) // instead of simply pointing to the cats from data, we're simply pointing to the state.js with the mapState function. hier halen we de array cats uit de state niet uit de data hier in cats.vue. zoals we hier zien zijn de arguments voor array de verpreidde elements ('spread'  ...)  uit de cats array. wat dus de verschillende objects zijn. IIG kunnen we nu de data object weg commenten die hebben we nu even niet meer nodig.de extra [] lijkt me op dit moment overbodig want cats is al een array, maar ach, misschien is het omdat op deze manier zorgen we dat hij de objects uitpakt met spread ... en niet de array cats zelf?? en is het niet zelfs zo dat we eerst een array uitpakken met ... en daarna weer erinstoppen met []?
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
  /* obsolete
  methods: {
    pet () { // method using the params from template to get the right animal from data array.
      // 2 ways to refer to arrays: this.cats, or this['cats'] which is what we do below
      const animal = this[this.$route.params.species][this.$route.params.id]
      return animal
      // const animal = [cat or dog to get the right array] [id number to get the right pet]
      // this only points to a defined var in this component, so probably species and id, and??? these 2 arrays are combined to form dogs 1 for example.
      // line 1: now we have all animals together, all we have to do now is choose which animal to display. cat or dog
      // line 2: now we just use the index (not id) which we already have from the click and the {{}}. if we were searching by id, things would be harder. we would have to search through the array and find the correct id. since we're using index (because array?) we'll just pass that, the index will be route.params.id
    }
  }
  */
}
</script>
