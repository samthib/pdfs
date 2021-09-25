<template>
  <v-row>
    <v-col cols="12" md="6" class="ma-0 pa-0">
      <Skeleton v-if="loading" />
      <PdfIframe v-else :value="iframeSrc" />
    </v-col>

    <v-col cols="12" md="6">
      <PageTitle :value="$options.name" />
      <v-row>
        <v-col cols="12" md="4">
          <ImageInput v-model="logo" @input="changeImage" />
        </v-col>
        <v-col cols="12" md="4">
          <ColorPicker v-model="color[0]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" md="4">
          <ColorPicker v-model="color[1]" @input="changeDatas" />
        </v-col>
      </v-row>
      <ContentInput v-model="title" :label="'Title'" @input="changeDatas" />
      <ContentTextarea v-model="paragraph" :label="'Paragraph'" @input="changeDatas" />
      <v-row>
        <v-col cols="12" md="6">
          <DatePicker v-model="date" @input="changeDatas" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "@/assets/js/pdfs/pdf.js";
import Skeleton from "@/components/Skeleton.vue";
import PdfIframe from "@/components/PdfIframe.vue";
import PageTitle from "@/components/Layouts/PageTitle.vue";
import ColorPicker from "@/components/Pickers/ColorPicker.vue";
import DatePicker from "@/components/Pickers/DatePicker.vue";
import ImageInput from "@/components/Inputs/ImageInput.vue";
import ContentInput from "@/components/Inputs/ContentInput.vue";
import ContentTextarea from "@/components/Inputs/ContentTextarea.vue";

export default {
  name: "Pdf",
  props: ["name"],
  data() {
    return {
      loading: true,
      timer: Date.now(),
      iframeSrc: "",
      logo: "",
      title: "",
      paragraph: "",
      color: [],
      date: "",

      docDefinition: docDefinition,
    };
  },
  components: {
    Skeleton,
    PdfIframe,
    PageTitle,
    ColorPicker,
    DatePicker,
    ImageInput,
    ContentInput,
    ContentTextarea,
  },
  methods: {
    /**
     * Create a PDF with PDFMake from the value of docDefinition
     */
    generateUri() {
      const pdfDocGenerator = pdfMake.createPdf(this.docDefinition);
      pdfDocGenerator.getDataUrl((dataUrl) => {
        this.iframeSrc = dataUrl;
      });
    },
    changeImage() {
      this.docDefinition.header[1].columns[0].image = this.logo;

      this.generateUri();
    },
    changeDatas() {
      this.docDefinition.content[0].text = this.title;
      this.docDefinition.content[1].text = this.paragraph;
      this.docDefinition.content[2].text = this.date;
      this.docDefinition.header[0].canvas[0].linearGradient[0] = this.color[0];
      this.docDefinition.header[0].canvas[0].linearGradient[1] = this.color[1];
      this.docDefinition.header[0].canvas[0].linearGradient[2] = this.color[0];

      // setTimeout(() => {
      //   if (this.timer + 1000 < Date.now()) {
      //     this.generateUri();
      //     this.timer = Date.now();
      //   }
      // }, 1000);

      this.generateUri();
    },
  },
  created() {
    this.logo = this.docDefinition.images.logo;
    this.title = this.docDefinition.content[0].text;
    this.paragraph = this.docDefinition.content[1].text;
    this.date = this.docDefinition.content[2].text;
    this.color[0] = this.docDefinition.header[0].canvas[0].linearGradient[0];
    this.color[1] = this.docDefinition.header[0].canvas[0].linearGradient[1];
    this.color[2] = this.docDefinition.header[0].canvas[0].linearGradient[2];

    this.generateUri();
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
