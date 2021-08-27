<template>
  <div>
    <v-responsive max-width="300">
      <v-text-field
        clearable
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        outlined
        color="grey"
        dense
        flat
        hide-details
        rounded
        placeholder="Search"
        @change="getData"
      ></v-text-field>
    </v-responsive>
    <div class="grid md:grid-cols-4 gap-4">
      <v-card
        class=" my-12"
        max-width="374"
        v-for="(item, index) in items"
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

        <v-card-actions>
          <v-btn color="error" link :to="`/${item.id}`">
            See Details
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import api from "~/mixins/api";
export default {
  mixins: [api],
  data() {
    return {};
  }
};
</script>
