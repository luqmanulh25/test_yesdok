<template>
  <div class="d-md-flex">
    <v-btn class="mb-3" text small link to="/">
      <v-icon class="mr-2">mdi-arrow-left-circle</v-icon>Back</v-btn
    >
    <v-responsive>
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" :src="request.image"></v-img>

        <v-card-title class="">
          {{ request.name }}
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <div class="grey--text mb-5">
              <v-avatar
                :color="request.status == 'Alive' ? 'success' : 'error'"
                size="10"
              >
              </v-avatar>
              {{ request.status }} - {{ request.species }}
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            <b> Last known location: </b> <br />
            {{ request.location.name }}
          </div>

          <div>
            <b> First seen in: </b> <br />
            {{ request.episode[0] }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-expansion-panels popout>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Full Episodes
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ request.episode.join(" ") }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-actions>
      </v-card>
    </v-responsive>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const request = await $axios.$get(
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
    return { request };
  }
};
</script>
