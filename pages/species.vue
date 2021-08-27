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
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" :src="item.image"></v-img>

        <v-card-title class="">
          {{ item.name }}
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <div class="grey--text "></div>
          </v-row>

          <div class="my-4 text-subtitle-1"></div>

          <div></div>
        </v-card-text>
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
