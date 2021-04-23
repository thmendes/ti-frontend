<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          size="32"
          :style="'background-repeat: no-repeat; background-size: cover; background-position: center; background-image: url(\'https://ti-buckets-stack-userbucket-oojcxvm3laf9.s3.amazonaws.com/' + getUserEmail + '/profile.jpg\');'"
        >
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.value"
          text
          @click="$router.push(link.value)"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn text @click="logout">Sair</v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="pink lighten-1 white--text text-center"
        style="min-width: 100%;"
      >
        <v-card-text class="white--text pt-0 mt-4">
          Site não oficial - Teste para desenvolvedor
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Toro Investimentos - Desafio</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    data: () => ({
      links: [
        { name: 'Minha Conta', value: '/conta' },
        { name: 'Meus Ativos', value: '/ativos'},
        { name: 'Ações', value: '/acoes' }
      ],
      profileObject: {
        backgroundColor: 'red',
        
      }
    }),
    computed: {
      ...mapGetters({
        getUserEmail: 'getUserEmail'
      })
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout'
      }),
    },

  }
</script>

<style>
</style>