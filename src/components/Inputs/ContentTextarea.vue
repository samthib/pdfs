<template>
  <v-textarea
    :label="label"
    outlined
    color="red darken-4"
    item-color="red darken-4"
    maxlength="500"
    counter
    auto-grow
    v-model="content"
    @input="handleInput"
  ></v-textarea>
</template>

<script>
export default {
  name: "ContentTextarea",
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
