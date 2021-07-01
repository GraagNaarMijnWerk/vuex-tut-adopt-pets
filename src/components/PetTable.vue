<template>
    <div>
      <!--<p>difgerfewfi</p> dit was een test of die wel een p wou weergeven-->
      <h1>{{ species }} for Adoption</h1> <!-- change cats into {{ species }}-->
      <b-table striped hover :items="cats"> <!-- populate table with cats array --> <!-- change "cats" into "pets"-->
        <template v-slot:cell(name)="data"> <!-- make items clickable links-->
          <!-- <router-link:to="`/pets/${data.value}`">{{ data.value }}</router-link> -->
          <a :href="`pets/${species}/${data.index}`">{{ data.value }}</a> <!-- click changes route and page--> <!-- change /cats into /${species}/-->
      </template>
      </b-table>
      <h1>"cats"</h1>
    </div>
</template>

<script>
export default {
    props:{
        species: String,
        pets: Array,
    }
}
</script>