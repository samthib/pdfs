<template>
  <v-text-field
    label="Phone"
    append-icon="mdi-phone"
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
  name: "PhoneInput",
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
