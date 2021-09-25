<template>
  <v-color-picker 
    v-model="content" 
    @input="handleInput">
  </v-color-picker>
</template>

<script>
export default {
  name: "ColorPicker",
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
