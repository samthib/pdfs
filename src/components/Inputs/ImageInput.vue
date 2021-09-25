<template>
  <div>
    <label for="image-input">
      <v-badge offset-x="20" offset-y="20" icon="mdi-image-plus" color="red darken-4">
        <v-img :src="content" contain width="200px"></v-img>
      </v-badge>
    </label>
    <input
      id="image-input"
      class="d-none"
      type="file"
      accept="image/*"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "ImageInput",
  props: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(event) {
      if (event.target.files[0].size > 1024000) {
        alert("The file's size must be under 1Mo.");
        return {
          error: true,
          message: "File size is too big",
        };
      }

      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.content = e.target.result;
        this.$emit("input", this.content);
      };
    },
  },
};
</script>
