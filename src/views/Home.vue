<template>
  <v-row class="my-3">
    <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="6" md="4" lg="3">
      <v-skeleton-loader :loading="loading" scale-transition type="image, image, article">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card :elevation="hover ? 2 : 16">
              <v-img aspect-ratio="0.7071" :src="item.image"></v-img>

              <v-card-text>
                <h2 class="text-h6 red--text darken-4">
                  {{ item.title }}
                </h2>
                {{ item.description }}
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="red darken-4">
                  <v-btn :to="{ name: item.linkName }" light>Try it</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    loading: true,
    overlay: false,
    items: [
      {
        id: 0,
        title: "Resume",
        description: "Complete et customize this resume with your informations.",
        linkName: "Resume",
        image: window.location.origin + "/img/resume.png",
      },
      {
        id: 1,
        title: "Invoice",
        description: "An empty invoice to fill with your products and prices.",
        linkName: "Invoice",
        image: window.location.origin + "/img/invoice.png",
      },
      {
        id: 2,
        title: "Card",
        description: "A customizable business card with QRCode for your company.",
        linkName: "Card",
        image: window.location.origin + "/img/card.png",
      },
      {
        id: 3,
        title: "Ticket",
        description: "Fill your transportation's ticket and generate the QRCode.",
        linkName: "Ticket",
        image: window.location.origin + "/img/ticket.png",
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
