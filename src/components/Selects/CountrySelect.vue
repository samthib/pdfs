<template>
  <v-select
    v-model="content"
    :items="items"
    label="Country"
    color="red darken-4"
    item-color="red darken-4"
    append-icon="mdi-map"
    @input="handleInput"
    dense
    outlined
  ></v-select>
</template>

<script>
import countries from "@/assets/js/pdfs/countries.js";

export default {
  name: "CountrySelect",
  props: ["value"],
  
  data() {
    return {
      content: this.value,
      items: countries,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
