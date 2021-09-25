<template>
  <v-text-field
    :label="label"
    outlined
    dense
    color="red darken-4"
    item-color="red darken-4"
    maxlength="20"
    counter
    v-model="content"
    @input="handleInput"
  ></v-text-field>
</template>

<script>
export default {
  name: "ContentInput",
  props: ["value", "label"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
