<template>
  <v-row class="my-4">
    <v-chip class="mx-auto" label dark large color="red darken-4 elevation-4">
      <h2 class="mx-auto">{{ content }}</h2>
    </v-chip>
  </v-row>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
};
</script>
