<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            xl="3"
            lg="4"
            sm="6"
            md="6"
          >
            <v-card class="elevation-2">
              <v-toolbar color="#091827"  flat>
                <v-img
                  :src="require('../assets/logo.png')"
                  class="my-3"
                  contain
                  height="50"
                ></v-img>
              </v-toolbar>
              <v-card-text class="pt-10">
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    name="e-mail"
                    prepend-icon="mdi-account"
                    type="text"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Senha"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    outlined
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="#00839F" @click="login" class="white--text" width="100%">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "login",
  components:{
  },
  data () {
    return {
      email: "",
      password: "",
      error: null,
      loading: false
    }
  },
  methods: {
    ...mapActions({
      signin: 'auth/signin',
      setSnackbar: 'setSnackbar'
    }),
    login () {
       this.signin({email: this.email, password: this.password})
        .then(() => {
          this.$router.push('/conta')
        })
        .catch((err) => {
          let message = err.response.data.message

          if(err.response.data.errors.length > 0){
            err.response.data.errors.forEach(element => {
              console.log(element.error)
              message = message.concat(`${element.error} `)
            });
          }

          this.setSnackbar({
            type: 'error',
            msg: message
          })
        })
    }
  }
}
</script>

<style>
h4 {
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 18px;
}
p {
  text-align: center;
  font-size: 14px;
  padding-bottom: 10px;
}
.login-box {
  width: 400px;
  height: auto;
  background-color: white;
  margin-top: 60px;
  border-radius: 5px;
  padding: 40px;
  margin: auto;
  border: 1px solid #e4e6e7;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}
</style>
