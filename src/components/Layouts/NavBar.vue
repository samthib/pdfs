<template>
  <div>
    <v-app-bar color="red darken-4" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-avatar>
        <img src="@/assets/img/icon.png" alt="Logo" />
      </v-avatar>
      
      <v-toolbar-title class="font-weight-bold">{{ SiteTitle }}</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title center-active>
          <v-tab to="/">Home</v-tab>
          <!-- <v-tab :to="{ name: 'Pdf' }">Pdf</v-tab> -->
          <v-tab :to="{ name: 'Resume' }">Resume</v-tab>
          <v-tab :to="{ name: 'Invoice' }">Invoice</v-tab>
          <v-tab :to="{ name: 'Card' }">Card</v-tab>
          <v-tab :to="{ name: 'Ticket' }">Ticket</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-btn outlined href="http://samuel-thibault.fr" target="blank" class="text-lowercase">
        samuel-thibault.fr
        <v-icon right>mdi-open-in-new</v-icon>
      </v-btn>

      <v-menu left bottom rounded>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group color="red darken-4">
            <!-- <v-list-item :to="{ name: 'Pdf' }">Pdf</v-list-item> -->
            <v-list-item :to="{ name: 'Resume' }">Resume</v-list-item>
            <v-list-item :to="{ name: 'Invoice' }">Invoice</v-list-item>
            <v-list-item :to="{ name: 'Card' }">Card</v-list-item>
            <v-list-item :to="{ name: 'Ticket' }">Ticket</v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="red darken-4" dark absolute bottom temporary>
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'About' }">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item :to="{ name: 'Contact' }">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
    SiteTitle: "PDF Maker",
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
