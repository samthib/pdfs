<template>
  <v-row>
    <v-col cols="12" md="6" class="ma-0 pa-0">
      <Skeleton v-if="loading" />
      <PdfIframe v-else :value="iframeSrc" />
    </v-col>

    <v-col cols="12" md="6">
      <PageTitle :value="$options.name" />
      <v-row class="ma-0 pa-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Logo'" />
          <ImageInput v-model="logo" @input="changeImage" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Text Color'" />
          <ColorPicker v-model="textColor" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row class="ma-0 pa-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gadient 1 Color 1'" />
          <ColorPicker v-model="linearGradient1[0]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gradient 1 Color 2'" />
          <ColorPicker v-model="linearGradient1[1]" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row class="ma-0 pa-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gadient 2 Color 1'" />
          <ColorPicker v-model="linearGradient2[0]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gradient 2 Color 2'" />
          <ColorPicker v-model="linearGradient2[1]" @input="changeDatas" />
        </v-col>
      </v-row>

      <div class="mt-2">
        <v-row>
          <InputLabel class="mx-auto" :value="'Recto'" />
        </v-row>
        <div class="mt-5">
          <ContentInput v-model="title" :label="'Title'" @input="changeDatas" />
          <ContentInput v-model="subtitle" :label="'Subtitle'" @input="changeDatas" />
        </div>
      </div>

      <div class="mt-2">
        <v-row>
          <InputLabel class="mx-auto" :value="'Verso'" />
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <ContentInput v-model="name" :label="'Name'" @input="changeDatas" />
          </v-col>
          <v-col cols="12" sm="6">
            <ContentInput v-model="occupation" :label="'Occupation'" @input="changeDatas" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <ContentInput v-model="phone1" :label="'Phone 1'" @input="changeDatas" />
          </v-col>
          <v-col cols="12" sm="6">
            <ContentInput v-model="phone2" :label="'Phone 2'" @input="changeDatas" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <ContentInput v-model="email" :label="'Email'" @input="changeDatas" />
          </v-col>
          <v-col cols="12" sm="6">
            <ContentInput v-model="website" :label="'Website'" @input="changeDatas" />
          </v-col>
        </v-row>
        <ContentInput v-model="adress1" :label="'Adress 1'" @input="changeDatas" />
        <ContentInput v-model="adress2" :label="'Adress 2'" @input="changeDatas" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "@/assets/js/pdfs/card.js";
import Skeleton from "@/components/Skeleton.vue";
import PdfIframe from "@/components/PdfIframe.vue";
import PageTitle from "@/components/Layouts/PageTitle.vue";
import ColorPicker from "@/components/Pickers/ColorPicker.vue";
import DatePicker from "@/components/Pickers/DatePicker.vue";
import ImageInput from "@/components/Inputs/ImageInput.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import ContentInput from "@/components/Inputs/ContentInput.vue";

export default {
  name: "Card",
  components: {
    Skeleton,
    PdfIframe,
    PageTitle,
    ColorPicker,
    DatePicker,
    ImageInput,
    InputLabel,
    ContentInput,
  },
  data() {
    return {
      loading: true,
      timer: Date.now(),
      iframeSrc: "",
      logo: null,
      title: "",
      subtitle: "",
      name: "",
      occupation: "",
      phone1: "",
      phone2: "",
      email: "",
      website: "",
      adress1: "",
      adress2: "",
      qrCode: "",
      textColor: "",
      linearGradient1: [],
      linearGradient2: [],
      docDefinition: docDefinition,
    };
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
      this.docDefinition.content[1].image = this.logo;
      this.docDefinition.content[6].columns[0].stack[0].image = this.logo;

      this.generateUri();
    },
    changeDatas() {
      // colors
      this.docDefinition.defaultStyle.color = this.textColor;

      this.docDefinition.content[0].canvas[0].linearGradient[0] = this.linearGradient1[0];
      this.docDefinition.content[0].canvas[0].linearGradient[1] = this.linearGradient1[1];
      this.docDefinition.content[0].canvas[0].linearGradient[2] = this.linearGradient1[0];

      this.docDefinition.content[0].canvas[1].linearGradient[0] = this.linearGradient2[0];
      this.docDefinition.content[0].canvas[1].linearGradient[1] = this.linearGradient2[1];
      this.docDefinition.content[0].canvas[1].linearGradient[2] = this.linearGradient2[0];
      this.docDefinition.content[0].canvas[1].linearGradient[3] = this.linearGradient2[1];
      this.docDefinition.content[0].canvas[1].linearGradient[4] = this.linearGradient2[0];

      this.docDefinition.content[0].canvas[2].linearGradient[0] = this.linearGradient2[0];
      this.docDefinition.content[0].canvas[2].linearGradient[1] = this.linearGradient2[1];
      this.docDefinition.content[0].canvas[2].linearGradient[2] = this.linearGradient2[0];

      this.docDefinition.content[0].canvas[3].linearGradient[0] = this.linearGradient2[0];
      this.docDefinition.content[0].canvas[3].linearGradient[1] = this.linearGradient2[1];
      this.docDefinition.content[0].canvas[3].linearGradient[2] = this.linearGradient2[0];
      this.docDefinition.content[0].canvas[3].linearGradient[3] = this.linearGradient2[1];
      this.docDefinition.content[0].canvas[3].linearGradient[4] = this.linearGradient2[0];

      this.docDefinition.content[5].canvas[0].linearGradient[0] = this.linearGradient1[0];
      this.docDefinition.content[5].canvas[0].linearGradient[1] = this.linearGradient1[1];
      this.docDefinition.content[5].canvas[0].linearGradient[2] = this.linearGradient1[0];

      this.docDefinition.content[5].canvas[1].linearGradient[0] = this.linearGradient2[0];
      this.docDefinition.content[5].canvas[1].linearGradient[1] = this.linearGradient2[1];
      this.docDefinition.content[5].canvas[1].linearGradient[2] = this.linearGradient2[0];
      this.docDefinition.content[5].canvas[1].linearGradient[3] = this.linearGradient2[1];
      this.docDefinition.content[5].canvas[1].linearGradient[4] = this.linearGradient2[0];

      this.docDefinition.styles.occupation.color = this.linearGradient1[0];

      // content
      this.docDefinition.content[2].text = this.title;
      this.docDefinition.content[3].text = this.subtitle;
      this.docDefinition.content[6].columns[1].stack[0].text = this.name;
      this.docDefinition.content[6].columns[1].stack[1].text = this.occupation;
      this.docDefinition.content[6].columns[1].stack[3].text = this.phone1;
      this.docDefinition.content[6].columns[1].stack[4].text = this.phone2;
      this.docDefinition.content[6].columns[1].stack[6].text = this.email;
      this.docDefinition.content[6].columns[1].stack[7].text = this.website;
      this.docDefinition.content[6].columns[1].stack[9].text = this.adress1;
      this.docDefinition.content[6].columns[1].stack[10].text = this.adress2;
      this.docDefinition.content[7].qr = this.website;

      this.generateUri();
    },
  },
  created() {
    // colors
    this.textColor = this.docDefinition.defaultStyle.color;
    this.linearGradient1[0] = this.docDefinition.content[0].canvas[0].linearGradient[0];
    this.linearGradient1[1] = this.docDefinition.content[0].canvas[0].linearGradient[1];
    this.linearGradient2[0] = this.docDefinition.content[0].canvas[1].linearGradient[0];
    this.linearGradient2[1] = this.docDefinition.content[0].canvas[1].linearGradient[1];

    // content
    this.logo = this.docDefinition.images.logo;
    this.title = this.docDefinition.content[2].text;
    this.subtitle = this.docDefinition.content[3].text;
    this.name = this.docDefinition.content[6].columns[1].stack[0].text;
    this.occupation = this.docDefinition.content[6].columns[1].stack[1].text;
    this.phone1 = this.docDefinition.content[6].columns[1].stack[3].text;
    this.phone2 = this.docDefinition.content[6].columns[1].stack[4].text;
    this.email = this.docDefinition.content[6].columns[1].stack[6].text;
    this.website = this.docDefinition.content[6].columns[1].stack[7].text;
    this.adress1 = this.docDefinition.content[6].columns[1].stack[9].text;
    this.adress2 = this.docDefinition.content[6].columns[1].stack[10].text;
    this.qrCode = this.docDefinition.content[7].qr;

    // Generate a new URI with datas after document is loaded
    this.generateUri();
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
