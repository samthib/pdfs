<template>
  <v-select
    v-model="content"
    :items="items"
    :label="label"
    color="red darken-4"
    item-color="red darken-4"
    append-icon="mdi-hours-24"
    @input="handleInput"
    dense
    outlined
  >
  </v-select>
</template>

<script>
export default {
  name: "HourSelect",
  props: ["value", "label"],

  data() {
    return {
      content: this.value,
      items: Array.from({length: 24}, (e, i)=> i + 'h00'),
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
