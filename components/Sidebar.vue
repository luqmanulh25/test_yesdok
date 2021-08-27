<template>
  <v-card class="mx-auto" height="100%">
    <v-list>
      <v-list-item
        v-for="(menu, index) in menus"
        :key="index"
        link
        :to="menu.path"
      >
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { text: "Characters", icon: "mdi-account-circle", path: "/" },
        { text: "Species", icon: "mdi-allergy", path: "/species" }
      ]
    };
  }
};
</script>
