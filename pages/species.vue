<template>
  <div>
    <v-responsive max-width="200">
      <v-select
        outlined
        dense
        placeholder="Select Species"
        :items="specieses"
        item-value="name"
        item-text="name"
        v-model="species"
      ></v-select>
    </v-responsive>
    <div class="grid md:grid-cols-4 gap-4">
      <v-card
        max-width="374"
        v-for="(item, index) in items.filter(f => f.species == species)"
        :key="index"
      >
        <v-img height="250" :src="item.image"></v-img>
        <v-card-title class="">
          {{ item.name }}
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import api from "~/mixins/api";
export default {
  mixins: [api],
  data() {
    return {
      species: "Human",
      specieses: [{ name: "Human" }, { name: "Alien" }]
    };
  }
};
</script>
