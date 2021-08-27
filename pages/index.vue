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
        class="mt-10"
        max-width="374"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-img height="250" :src="item.image"></v-img>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-actions class="mb-3">
          <v-btn color="#E91E63" link :to="`/${item.id}`">
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
