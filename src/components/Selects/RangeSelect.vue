<template>
  <v-select
    v-model="content"
    :items="items"
    :label="label"
    color="red darken-4"
    item-color="red darken-4"
    @input="handleInput"
    dense
    outlined
  >
  </v-select>
</template>

<script>
export default {
  name: "RangeSelect",
  props: ["value", "range", "label"],

  data() {
    return {
      content: this.value,
      items: Array.from({length: this.range}, (e, i)=> i+1)
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
