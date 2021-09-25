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
          <InputLabel :value="'Customer'" class="mb-5" />
          <ContentInput v-model="name" :label="'First Name'" @input="changeDatas" />
          <ContentInput v-model="lastName" :label="'Last Name'" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'Travel'" />
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <ContentInput v-model="from" :label="'From'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <ContentInput v-model="to" :label="'To'" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <DatePicker v-model="date" :label="'Date'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <HourSelect v-model="departure" :label="'Departure'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <HourSelect v-model="arrival" :label="'Arrival'" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <RangeSelect v-model="classN" v-bind:key="classN" :range="2" :label="'Classe'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <RangeSelect v-model="car" v-bind:key="car" :range="12" :label="'Car'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <RangeSelect v-model="seat" v-bind:key="seat" :range="48" :label="'Seat'" @input="changeDatas" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "@/assets/js/pdfs/ticket.js";
import Skeleton from "@/components/Skeleton.vue";
import PdfIframe from "@/components/PdfIframe.vue";
import PageTitle from "@/components/Layouts/PageTitle.vue";
import ColorPicker from "@/components/Pickers/ColorPicker.vue";
import DatePicker from "@/components/Pickers/DatePicker.vue";
import HourSelect from "@/components/Selects/HourSelect.vue";
import RangeSelect from "@/components/Selects/RangeSelect.vue";
import ImageInput from "@/components/Inputs/ImageInput.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import ContentInput from "@/components/Inputs/ContentInput.vue";

export default {
  name: "Ticket",
  components: {
    Skeleton,
    PdfIframe,
    PageTitle,
    ColorPicker,
    DatePicker,
    HourSelect,
    RangeSelect,
    ImageInput,
    InputLabel,
    ContentInput,
  },
  data() {
    return {
      loading: true,
      iframeSrc: "",
      logo: null,
      name: "",
      lastName: "",
      from: "",
      to: "",
      date: "",
      departure: "",
      arrival: "",
      classN: "",
      car: "",
      seat: "",

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
      this.docDefinition.header.stack[0].columns[0].image = this.logo;

      this.generateUri();
    },
    changeDatas() {
      this.docDefinition.content[1].columns[0].stack[0].text[1].text = this.name;
      this.docDefinition.content[1].columns[0].stack[1].text[1].text = this.lastName;
      this.docDefinition.content[2].columns[0].qr = this.name + " " + this.lastName;

      this.docDefinition.content[2].columns[1].stack[0].text[1].text = this.date;
      this.docDefinition.content[2].columns[1].stack[1].columns[0].stack[0].text[1].text = this.from;
      this.docDefinition.content[2].columns[1].stack[1].columns[1].stack[0].text[1].text = this.to;
      this.docDefinition.content[2].columns[1].stack[1].columns[0].stack[1].text = this.departure;
      this.docDefinition.content[2].columns[1].stack[1].columns[1].stack[1].text = this.arrival;

      this.docDefinition.content[2].columns[1].stack[2].stack[0].text[1].text = this.classN;
      this.docDefinition.content[2].columns[1].stack[2].stack[1].text[1].text = this.car;
      this.docDefinition.content[2].columns[1].stack[2].stack[1].text[3].text = this.seat;

      this.generateUri();
    },
  },
  created() {
    this.logo = this.docDefinition.images.logo;

    this.name = this.docDefinition.content[1].columns[0].stack[0].text[1].text;
    this.lastName = this.docDefinition.content[1].columns[0].stack[1].text[1].text;
    this.qrCode = this.docDefinition.content[2].columns[0].qr;

    this.date = this.docDefinition.content[2].columns[1].stack[0].text[1].text;

    this.from = this.docDefinition.content[2].columns[1].stack[1].columns[0].stack[0].text[1].text;
    this.to = this.docDefinition.content[2].columns[1].stack[1].columns[1].stack[0].text[1].text;
    this.departure = this.docDefinition.content[2].columns[1].stack[1].columns[0].stack[1].text;
    this.arrival = this.docDefinition.content[2].columns[1].stack[1].columns[1].stack[1].text;

    this.classN = this.docDefinition.content[2].columns[1].stack[2].stack[0].text[1].text;
    this.car = this.docDefinition.content[2].columns[1].stack[2].stack[1].text[1].text;
    this.seat = this.docDefinition.content[2].columns[1].stack[2].stack[1].text[3].text;

    this.generateUri();
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
