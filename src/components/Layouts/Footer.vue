<template>
  <v-footer dark padless>
    <v-card width="100%" class="red darken-4 white--text text-center">
      <v-card-text class="py-0">
        <v-btn v-for="link in links" :key="link.id" :href="link.url" target="blank" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text py-0">
        <v-btn color="red darken-4" depressed :href="links[1].url" target="blank" class="text-capitalize">
          &copy; {{ new Date().getFullYear() }} <strong>Samuel Thibault</strong>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
  data: () => ({
    links: [
      { id: 0, url: "https://www.linkedin.com/in/samuel-thibault-1528481b1/", icon: "mdi-linkedin" },
      { id: 1, url: "https://samuel-thibault.fr", icon: "mdi-web" },
      { id: 2, url: "https://github.com/samthib", icon: "mdi-github" },
    ],
  }),
};
</script>
