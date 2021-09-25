<template>
  <v-container grid-list-xs>
    <PageTitle :value="$options.name" />

    <!-- <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Full Name"
              placeholder="John Doe"
              required
              outlined
              prepend-inner-icon="mdi-map-marker"
              color="red darken-4"
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
                () => !!address || 'This field is required',
                () => (!!address && address.length <= 25) || 'Address must be less than 25 characters',
                addressCheck,
              ]"
              label="Address e-mail"
              placeholder="email@email.com"
              counter="25"
              required
              outlined
              prepend-inner-icon="mdi-map-marker"
              color="red darken-4"
            ></v-text-field>

            <v-text-field
              ref="Subject"
              v-model="Subject"
              :rules="[() => !!Subject || 'This field is required']"
              :error-messages="errorMessages"
              label="Subject"
              placeholder="My subject ..."
              required
              outlined
              prepend-inner-icon="mdi-map-marker"
              color="red darken-4"
            ></v-text-field>

            <v-textarea
              label="Message"
              placeholder="My message ..."
              auto-grow
              outlined
              rows="8"
              color="red darken-4"
            ></v-textarea>
          </v-card-text>
          <v-card-actions class="mt-4">
            <v-btn class="ma-1 ma-sm-4" dark color="red darken-4" elevation="2" outlined x-large>
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn @click="submit" class="ma-1 ma-sm-4" dark color="red darken-4" elevation="2" x-large>
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import PageTitle from "@/components/Layouts/PageTitle.vue";

export default {
  // data: () => ({
  //   errorMessages: "",
  //   name: null,
  //   address: null,
  //   subject: null,
  //   city: null,
  //   state: null,
  //   zip: null,
  //   country: null,
  //   formHasErrors: false,
  // }),
  components: {
    PageTitle,
  },
  // computed: {
  //   form() {
  //     return {
  //       name: this.name,
  //       address: this.address,
  //       subject: this.subject,
  //       city: this.city,
  //       state: this.state,
  //       zip: this.zip,
  //       country: this.country,
  //     };
  //   },
  // },
  // watch: {
  //   name() {
  //     this.errorMessages = "";
  //   },
  // },
  // methods: {
  //   addressCheck() {
  //     this.errorMessages = this.address && !this.name ? `Hey! I'm required` : "";

  //     return true;
  //   },
  //   resetForm() {
  //     this.errorMessages = [];
  //     this.formHasErrors = false;

  //     Object.keys(this.form).forEach((f) => {
  //       this.$refs[f].reset();
  //     });
  //   },
  //   submit() {
  //     this.formHasErrors = false;

  //     Object.keys(this.form).forEach((f) => {
  //       if (!this.form[f]) this.formHasErrors = true;

  //       this.$refs[f].validate(true);
  //     });
  //   },
  // },
};
</script>
