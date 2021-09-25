<template>
  <v-text-field
    label="Email"
    append-icon="mdi-email"
    outlined
    dense
    color="red darken-4"
    item-color="red darken-4"
    maxlength="50"
    counter
    v-model="content"
    @input="handleInput"
  ></v-text-field>
</template>

<script>
export default {
  name: "EmailInput",
  props: ["value"],
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
