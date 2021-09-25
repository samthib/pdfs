<template>
  <v-responsive :aspect-ratio="21 / 31.2">
    <iframe
      width="100%"
      height="100%"
      id="iframePDF"
      style="border: none"
      :src="value"
    ></iframe>
  </v-responsive>
</template>

<script>
export default {
  name: "PdfIframe",
  props: ["value"],
};
</script>
