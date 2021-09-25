<template>
  <v-container>
    <PageTitle :value="$options.name" />

    <div class="mt-16">
      <img alt="Vue logo" align="left" class="ma-4" src="@/assets/img/icon.png" />
      <p class="text-h5">
        PDFs are ubiquitous across the web, with virtually every enterprise relying on them to share documents.
        <br />
        I made this website to show you how we can manage customized PDFs. The PDFs are generated with the javascript
        library <a href="http://pdfmake.org/" class="text-decoration-none">PDFMake</a>, an open-source library based on
        <a href="http://pdfkit.org/" class="text-decoration-none">PDFKit</a>, that makes creating complex, multi-page,
        printable documents easy.
        <br />
        You can play with the differents types of documents available for now :
        <router-link :to="{ name: 'Resume' }" class="text-decoration-none">Resume</router-link>,
        <router-link :to="{ name: 'Card' }" class="text-decoration-none">Card</router-link>,
        <router-link :to="{ name: 'Ticket' }" class="text-decoration-none">Ticket</router-link>, 
        <router-link :to="{ name: 'Invoice' }" class="text-decoration-none">Invoice</router-link>, ...
        Each of them can be fully customized with your personals infomations, colors, and logo.
        <br />
        If you need to create event tickets, reports, certificates, ... or any PDFs of your choice, I can make a dynamic
        document for you or your users.
        <br />
        <br />
        <strong>Don't hesitate to contact me and take a look at my others projects </strong>
        <v-btn color="red darken-4" dark depressed href="http://samuel-thibault.fr" target="blank" class="text-lowercase">
          samuel-thibault.fr
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </p>
    </div>
  </v-container>
</template>

<script>
import PageTitle from "@/components/Layouts/PageTitle.vue";

export default {
  name: "About",
  components: {
    PageTitle,
  },
};
</script>
