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
          <InputLabel :value="'Logo'" />
          <ImageInput v-model="logo" @input="changeImage" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Title'" />
          <ContentInput v-model="title" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'References'" />
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="4">
          <ContentInput v-model="invoiceNumber" :label="'Ref number'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="4">
          <!-- <DatePicker v-model="issuedDate" :label="'Issued date'" @input="changeDatas" /> -->
        </v-col>
        <v-col cols="12" sm="4">
          <!-- <DatePicker v-model="duedDate" :label="'Due date'" @input="changeDatas" /> -->
        </v-col>
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <InputLabel :value="'Billing From'" />
          <ContentInput v-model="billingFrom" :label="'name'" @input="changeDatas" />
          <ContentInput v-model="adressFrom" :label="'street'" @input="changeDatas" />
          <ContentInput v-model="cityFrom" :label="'city'" @input="changeDatas" />
          <CountrySelect v-model="countryFrom" :label="'country'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <InputLabel :value="'Billing To'" />
          <ContentInput v-model="billingTo" :label="'name'" @input="changeDatas" />
          <ContentInput v-model="adressTo" :label="'street'" @input="changeDatas" />
          <ContentInput v-model="cityTo" :label="'city'" @input="changeDatas" />
          <CountrySelect v-model="countryTo" :label="'country'" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'Products'" />
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <InputLabel class="mx-auto" :value="'Item'" />
          <ContentInput v-model="items[0]" @input="changeDatas" />
          <ContentInput v-model="items[1]" @input="changeDatas" />
          <ContentInput v-model="items[2]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="2">
          <InputLabel class="mx-auto" :value="'Quantity'" />
          <ContentInput v-model="quantities[0]" @input="changeDatas" />
          <ContentInput v-model="quantities[1]" @input="changeDatas" />
          <ContentInput v-model="quantities[2]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="2">
          <InputLabel class="mx-auto" :value="'Price $'" />
          <ContentInput v-model="prices[0]" @input="changeDatas" />
          <ContentInput v-model="prices[1]" @input="changeDatas" />
          <ContentInput v-model="prices[2]" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="2">
          <InputLabel class="mx-auto" :value="'Tax %'" />
          <ContentInput v-model="tax[0]" @input="changeDatas" />
          <ContentInput v-model="tax[1]" @input="changeDatas" />
          <ContentInput v-model="tax[2]" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'Signature'" />
      </v-row>

      <v-row class="my-0">
        <v-col cols="12" sm="6">
          <ContentInput v-model="signature" :label="'Signature'" @input="changeDatas" />
        </v-col>
        <v-col cols="12" sm="6">
          <ContentInput v-model="job" :label="'Job'" @input="changeDatas" />
        </v-col>
      </v-row>

      <v-row>
        <InputLabel class="mx-auto" :value="'Notes'" />
      </v-row>

      <v-row class="my-0">
        <v-col cols="12">
          <ContentTextarea v-model="note" :label="'Note'" @input="changeDatas" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "@/assets/js/pdfs/invoice.js";
import Skeleton from "@/components/Skeleton.vue";
import PdfIframe from "@/components/PdfIframe.vue";
import PageTitle from "@/components/Layouts/PageTitle.vue";
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
  name: "Invoice",
  components: {
    Skeleton,
    PdfIframe,
    PageTitle,
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
      logo: null,
      title: "",
      invoiceNumber: "",
      issuedDate: "",
      duedDate: "",
      billingFrom: "",
      billingTo: "",
      adressFrom: "",
      cityFrom: "",
      countryFrom: "",
      adressTo: "",
      cityTo: "",
      countryTo: "",
      items: [],
      quantities: [],
      prices: [],
      tax: [],
      signature: "",
      job: "",
      note: "",

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
      this.docDefinition.images.logo = this.logo;

      this.generateUri();
    },
    changeDatas() {
      this.docDefinition.content[0].columns[1].stack[0].text = this.title;
      this.docDefinition.content[0].columns[1].stack[1].stack[0].columns[1].text = this.invoiceNumber;

      this.docDefinition.content[0].columns[1].stack[1].stack[1].columns[1].text = this.issuedDate;
      this.docDefinition.content[0].columns[1].stack[1].stack[2].columns[1].text = this.duedDate;

      this.docDefinition.content[2].columns[0].text = this.billingFrom;
      this.docDefinition.content[2].columns[1].text = this.billingTo;
      this.docDefinition.content[4].columns[0].text = this.adressFrom;
      this.docDefinition.content[4].columns[1].text = this.adressTo;
      this.docDefinition.content[5].columns[0].text = this.cityFrom;
      this.docDefinition.content[5].columns[1].text = this.cityTo;
      this.docDefinition.content[6].columns[0].text = this.countryFrom;
      this.docDefinition.content[6].columns[1].text = this.countryTo;

      this.docDefinition.content[8].table.body[1][0].text = this.items[0];
      this.docDefinition.content[8].table.body[1][1].text = this.quantities[0];
      this.docDefinition.content[8].table.body[1][2].text = this.prices[0];
      this.docDefinition.content[8].table.body[1][3].text = this.tax[0];
      this.docDefinition.content[8].table.body[2][0].text = this.items[1];
      this.docDefinition.content[8].table.body[2][1].text = this.quantities[1];
      this.docDefinition.content[8].table.body[2][2].text = this.prices[1];
      this.docDefinition.content[8].table.body[2][3].text = this.tax[1];
      this.docDefinition.content[8].table.body[3][0].text = this.items[2];
      this.docDefinition.content[8].table.body[3][1].text = this.quantities[2];
      this.docDefinition.content[8].table.body[3][2].text = this.prices[2];
      this.docDefinition.content[8].table.body[3][3].text = this.tax[2];

      this.docDefinition.content[8].table.body[1][4].text = this.itemsTotal[0];
      this.docDefinition.content[8].table.body[2][4].text = this.itemsTotal[1];
      this.docDefinition.content[8].table.body[3][4].text = this.itemsTotal[2];
      this.docDefinition.content[9].table.body[0][1].text = this.subTotal;
      this.docDefinition.content[9].table.body[1][1].text = this.taxTotal;
      this.docDefinition.content[9].table.body[2][1].text = this.total;

      this.docDefinition.content[10].columns[1].stack[1].text = this.signature;
      this.docDefinition.content[10].columns[1].stack[2].text = this.job;
      this.docDefinition.content[12].text = this.note;

      this.generateUri();
    },
  },
  computed: {
    itemsTotal: function() {
      var total = [0];
      for (var i = 0; i < this.prices.length; i++) {
        total[i] = parseInt(this.quantities[i]) * parseInt(this.prices[i]);
      }

      return total;
    },
    subTotal: function() {
      var products = [0];
      for (var i = 0; i < this.prices.length; i++) {
        products[i] = parseInt(this.quantities[i]) * parseInt(this.prices[i]);
      }

      return products.reduce((accumulator, current) => accumulator + current);
    },
    taxTotal: function() {
      var products = [0];
      for (var i = 0; i < this.tax.length; i++) {
        products[i] = parseInt(this.quantities[i]) * parseInt(this.prices[i]) * (parseInt(this.tax[i]) / 100);
      }

      return products.reduce((accumulator, current) => accumulator + current);
    },
    total: function() {
      return this.subTotal + this.taxTotal;
    },
  },
  created() {
    // Sidebar
    this.logo = this.docDefinition.images.logo;

    this.title = this.docDefinition.content[0].columns[1].stack[0].text;
    this.invoiceNumber = this.docDefinition.content[0].columns[1].stack[1].stack[0].columns[1].text;

    // this.issuedDate = this.docDefinition.content[0].columns[1][1].stack[1].columns[1].text;
    // this.duedDate = this.docDefinition.content[0].columns[1][1].stack[2].columns[1].text;

    this.billingFrom = this.docDefinition.content[2].columns[0].text;
    this.billingTo = this.docDefinition.content[2].columns[1].text;
    this.adressFrom = this.docDefinition.content[4].columns[0].text;
    this.adressTo = this.docDefinition.content[4].columns[1].text;
    this.cityFrom = this.docDefinition.content[5].columns[0].text;
    this.cityTo = this.docDefinition.content[5].columns[1].text;
    this.countryFrom = this.docDefinition.content[6].columns[0].text;
    this.countryTo = this.docDefinition.content[6].columns[1].text;

    this.items[0] = this.docDefinition.content[8].table.body[1][0].text;
    this.quantities[0] = this.docDefinition.content[8].table.body[1][1].text;
    this.prices[0] = this.docDefinition.content[8].table.body[1][2].text;
    this.tax[0] = this.docDefinition.content[8].table.body[1][3].text;
    this.items[1] = this.docDefinition.content[8].table.body[2][0].text;
    this.quantities[1] = this.docDefinition.content[8].table.body[2][1].text;
    this.prices[1] = this.docDefinition.content[8].table.body[2][2].text;
    this.tax[1] = this.docDefinition.content[8].table.body[2][3].text;

    this.items[2] = this.docDefinition.content[8].table.body[3][0].text;
    this.quantities[2] = this.docDefinition.content[8].table.body[3][1].text;
    this.prices[2] = this.docDefinition.content[8].table.body[3][2].text;
    this.tax[2] = this.docDefinition.content[8].table.body[3][3].text;

    this.signature = this.docDefinition.content[10].columns[1].stack[1].text;
    this.job = this.docDefinition.content[10].columns[1].stack[2].text;
    this.note = this.docDefinition.content[12].text;

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
