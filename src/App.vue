<template>
  <v-app>
    <NavBar />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from "@/components/Layouts/NavBar.vue";
import FooterBar from "@/components/Layouts/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
