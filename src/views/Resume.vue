<template>
  <v-row>
    <v-col cols="12" md="6" class="ma-0 pa-0">
      <Skeleton v-if="loading" />
      <PdfIframe v-else :value="iframeSrc" />
    </v-col>

    <v-col cols="12" md="6">
      <PageTitle :value="$options.name" />

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Avatar'" />
          <ImageInput v-model="avatar" @input="changeImage" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Text Color'" />
          <ColorPicker v-model="sidenavTextColor" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gadient Color 1'" />
          <ColorPicker v-model="linearGradient[0]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Gadient Color 2'" />
          <ColorPicker v-model="linearGradient[1]" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'Sidebar'" />
      </v-row>

      <v-row >
        <v-col cols="12">
          <AdressInput v-model="adress" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <PhoneInput v-model="phone" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <EmailInput v-model="email" @input="changeDatas" />
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <DatePicker v-model="birthday" :label="'Birthday'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <CountrySelect v-model="nationality" @input="changeDatas" />
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col cols="12" sm="4">
          <ContentInput v-model="languages[0]" :label="'Language 1'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <ContentInput v-model="languages[1]" :label="'Language 2'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <ContentInput v-model="languages[2]" :label="'Language 3'" @input="changeDatas" />
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col cols="12" sm="4">
          <ContentInput v-model="skills[0]" :label="'Skill 1'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <ContentInput v-model="skills[1]" :label="'Skill 2'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <ContentInput v-model="skills[2]" :label="'Skill 3'" @input="changeDatas" />
        </v-col>
      </v-row>

      <div class="mt-2">
        <v-row>
          <InputLabel class="mx-auto" :value="'Content'" />
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <ContentInput v-model="name" :label="'Name'" @input="changeDatas" />
          </v-col>
          <v-col cols="12" sm="6">
            <ContentInput v-model="occupation" :label="'Occupation'" @input="changeDatas" />
          </v-col>
        </v-row>
        <ContentInput v-model="title1" :label="'Title 1'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph1" :label="'Paragraph'" @input="changeDatas" />
        <ContentInput v-model="title2" :label="'Title 2'" @input="changeDatas" />
        <ContentInput v-model="paragraph2_item1_title" :label="'Title Item 1'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph2_item1" :label="'Item 1'" @input="changeDatas" />
        <ContentInput v-model="paragraph2_item2_title" :label="'Title Item 2'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph2_item2" :label="'Item 2'" @input="changeDatas" />
        <ContentInput v-model="paragraph2_item3_title" :label="'Title Item 3'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph2_item3" :label="'Item 3'" @input="changeDatas" />
        <ContentInput v-model="title3" :label="'Title 3'" @input="changeDatas" />
        <ContentInput v-model="paragraph3_item1_title" :label="'Title Item 1'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph3_item1" :label="'Item 1'" @input="changeDatas" />
        <ContentInput v-model="paragraph3_item2_title" :label="'Title Item 2'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph3_item2" :label="'Item 2'" @input="changeDatas" />
        <ContentInput v-model="paragraph3_item3_title" :label="'Title Item 3'" @input="changeDatas" />
        <ContentTextarea v-model="paragraph3_item3" :label="'Item 3'" @input="changeDatas" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "@/assets/js/pdfs/resume.js";
import Skeleton from "@/components/Skeleton.vue";
import PdfIframe from "@/components/PdfIframe.vue";
import PageTitle from "@/components/Layouts/PageTitle.vue";
import ColorPicker from "@/components/Pickers/ColorPicker.vue";
import DatePicker from "@/components/Pickers/DatePicker.vue";
import ImageInput from "@/components/Inputs/ImageInput.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import AdressInput from "@/components/Inputs/AdressInput.vue";
import EmailInput from "@/components/Inputs/EmailInput.vue";
import PhoneInput from "@/components/Inputs/PhoneInput.vue";
import ContentInput from "@/components/Inputs/ContentInput.vue";
import ContentTextarea from "@/components/Inputs/ContentTextarea.vue";
import CountrySelect from "@/components/Selects/CountrySelect.vue";

export default {
  name: "Resume",
  components: {
    Skeleton,
    PdfIframe,
    PageTitle,
    ColorPicker,
    DatePicker,
    ImageInput,
    InputLabel,
    AdressInput,
    EmailInput,
    PhoneInput,
    ContentInput,
    ContentTextarea,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      timer: Date.now(),
      iframeSrc: "",
      avatar: null,
      sidenavTextColor: "",
      linearGradient: [],
      name: "",
      occupation: "",
      nameColor: "",
      headerLineColor: "",
      adress: "",
      phone: "",
      email: "",
      birthday: "",
      nationality: "",
      languages: [],
      skills: [],
      title1: "",
      paragraph1: "",
      title2: "",
      paragraph2_item1_title: "",
      paragraph2_item1: "",
      paragraph2_item2_title: "",
      paragraph2_item2: "",
      paragraph2_item3_title: "",
      paragraph2_item3: "",
      title3: "",
      paragraph3_item1_title: "",
      paragraph3_item1: "",
      paragraph3_item2_title: "",
      paragraph3_item2: "",
      paragraph3_item3_title: "",
      paragraph3_item3: "",

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
      this.docDefinition.content[1].image = this.avatar;

      this.generateUri();
    },
    changeDatas() {
      // Sidebar
      this.docDefinition.styles.sideTextColor.color = this.sidenavTextColor;

      this.docDefinition.styles.name.color = this.linearGradient[1];
      this.docDefinition.content[0].canvas[0].linearGradient[0] = this.linearGradient[0];
      this.docDefinition.content[0].canvas[0].linearGradient[1] = this.linearGradient[1];
      this.docDefinition.content[0].canvas[1].color = this.linearGradient[1];
      this.docDefinition.content[2].columns[0].stack[1].stack[1].text = this.adress;
      this.docDefinition.content[2].columns[0].stack[1].stack[3].text = this.phone;
      this.docDefinition.content[2].columns[0].stack[1].stack[5].text = this.email;
      this.docDefinition.content[2].columns[0].stack[3].stack[1].text = this.birthday;
      this.docDefinition.content[2].columns[0].stack[3].stack[3].text = this.nationality;
      this.docDefinition.content[2].columns[0].stack[5].stack[0].text = this.languages[0];
      this.docDefinition.content[2].columns[0].stack[5].stack[1].text = this.languages[1];
      this.docDefinition.content[2].columns[0].stack[5].stack[2].text = this.languages[2];
      this.docDefinition.content[2].columns[0].stack[7].stack[0].text = this.skills[0];
      this.docDefinition.content[2].columns[0].stack[7].stack[1].text = this.skills[1];
      this.docDefinition.content[2].columns[0].stack[7].stack[2].text = this.skills[2];

      // Main content
      this.docDefinition.content[2].columns[1].stack[0].text = this.name;
      this.docDefinition.content[2].columns[1].stack[1].text = this.occupation;
      this.docDefinition.content[2].columns[1].stack[2].text = this.title1;
      this.docDefinition.content[2].columns[1].stack[3].text = this.paragraph1;
      this.docDefinition.content[2].columns[1].stack[4].text = this.title2;
      this.docDefinition.content[2].columns[1].stack[5].ul[0].stack[0].text = this.paragraph2_item1_title;
      this.docDefinition.content[2].columns[1].stack[5].ul[0].stack[1].text = this.paragraph2_item1;
      this.docDefinition.content[2].columns[1].stack[5].ul[1].stack[0].text = this.paragraph2_item2_title;
      this.docDefinition.content[2].columns[1].stack[5].ul[1].stack[1].text = this.paragraph2_item2;
      this.docDefinition.content[2].columns[1].stack[5].ul[2].stack[0].text = this.paragraph2_item3_title;
      this.docDefinition.content[2].columns[1].stack[5].ul[2].stack[1].text = this.paragraph2_item3;
      this.docDefinition.content[2].columns[1].stack[6].text = this.title3;
      this.docDefinition.content[2].columns[1].stack[7].ul[0].stack[0].text = this.paragraph3_item1_title;
      this.docDefinition.content[2].columns[1].stack[7].ul[0].stack[1].text = this.paragraph3_item1;
      this.docDefinition.content[2].columns[1].stack[7].ul[1].stack[0].text = this.paragraph3_item2_title;
      this.docDefinition.content[2].columns[1].stack[7].ul[1].stack[1].text = this.paragraph3_item2;
      this.docDefinition.content[2].columns[1].stack[7].ul[2].stack[0].text = this.paragraph3_item3_title;
      this.docDefinition.content[2].columns[1].stack[7].ul[2].stack[1].text = this.paragraph3_item3;

      this.generateUri();
    },
  },
  created() {
    // Sidebar
    this.avatar = this.docDefinition.images.avatar;
    this.sidenavTextColor = this.docDefinition.styles.sideTextColor.color;

    this.nameColor = this.docDefinition.styles.name.color;
    this.linearGradient[0] = this.docDefinition.content[0].canvas[0].linearGradient[0];
    this.linearGradient[1] = this.docDefinition.content[0].canvas[0].linearGradient[1];
    this.headerLineColor = this.docDefinition.content[0].canvas[1].color;
    this.adress = this.docDefinition.content[2].columns[0].stack[1].stack[1].text;
    this.phone = this.docDefinition.content[2].columns[0].stack[1].stack[3].text;
    this.email = this.docDefinition.content[2].columns[0].stack[1].stack[5].text;
    this.date = this.docDefinition.content[2].columns[0].stack[3].stack[1].text;
    this.nationality = this.docDefinition.content[2].columns[0].stack[3].stack[3].text;
    this.languages[0] = this.docDefinition.content[2].columns[0].stack[5].stack[0].text;
    this.languages[1] = this.docDefinition.content[2].columns[0].stack[5].stack[1].text;
    this.languages[2] = this.docDefinition.content[2].columns[0].stack[5].stack[2].text;
    this.skills[0] = this.docDefinition.content[2].columns[0].stack[7].stack[0].text;
    this.skills[1] = this.docDefinition.content[2].columns[0].stack[7].stack[1].text;
    this.skills[2] = this.docDefinition.content[2].columns[0].stack[7].stack[2].text;

    //Main content
    this.name = this.docDefinition.content[2].columns[1].stack[0].text;
    this.occupation = this.docDefinition.content[2].columns[1].stack[1].text;
    this.title1 = this.docDefinition.content[2].columns[1].stack[2].text;
    this.paragraph1 = this.docDefinition.content[2].columns[1].stack[3].text;
    this.title2 = this.docDefinition.content[2].columns[1].stack[4].text;
    this.paragraph2_item1_title = this.docDefinition.content[2].columns[1].stack[5].ul[0].stack[0].text;
    this.paragraph2_item1 = this.docDefinition.content[2].columns[1].stack[5].ul[0].stack[1].text;
    this.paragraph2_item2_title = this.docDefinition.content[2].columns[1].stack[5].ul[1].stack[0].text;
    this.paragraph2_item2 = this.docDefinition.content[2].columns[1].stack[5].ul[1].stack[1].text;
    this.paragraph2_item3_title = this.docDefinition.content[2].columns[1].stack[5].ul[2].stack[0].text;
    this.paragraph2_item3 = this.docDefinition.content[2].columns[1].stack[5].ul[2].stack[1].text;
    this.title3 = this.docDefinition.content[2].columns[1].stack[6].text;
    this.paragraph3_item1_title = this.docDefinition.content[2].columns[1].stack[7].ul[0].stack[0].text;
    this.paragraph3_item1 = this.docDefinition.content[2].columns[1].stack[7].ul[0].stack[1].text;
    this.paragraph3_item2_title = this.docDefinition.content[2].columns[1].stack[7].ul[1].stack[0].text;
    this.paragraph3_item2 = this.docDefinition.content[2].columns[1].stack[7].ul[1].stack[1].text;
    this.paragraph3_item3_title = this.docDefinition.content[2].columns[1].stack[7].ul[2].stack[0].text;
    this.paragraph3_item3 = this.docDefinition.content[2].columns[1].stack[7].ul[2].stack[1].text;

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
