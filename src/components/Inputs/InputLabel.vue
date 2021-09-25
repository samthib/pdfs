<template>
  <v-chip
    class="ma-1 elevation-4"
    label
    outlined
    small
    color="red darken-4"
  >
    {{ content }}
  </v-chip>
</template>

<script>
export default {
  name: "InputLabel",
  props: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
};
</script>
