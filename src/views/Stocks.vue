<template>
  <v-sheet
    min-height="100%"
    rounded="lg"
  >
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
      class="float-left"
    >
      <v-card
        color="#9CA89E"
        class="white--text"
      >
        <v-card-title >Top Ações</v-card-title>
        <v-card-text class="white--text">
          <div v-for="stock in stocks" :key="stock.id">
            <v-card
              class="my-2"
            >
              <v-card-title>
                <v-chip
                  class="mr-2"
                  color="primary"
                >
                  {{ stock.id }}
                </v-chip>
                - {{ stock.description}}
              </v-card-title>
              <v-card-text>
                Preço atual: R$ {{ stock.price }}
              </v-card-text>
              <v-card-actions>
                <v-btn rounded class="white--text" color="#16796F">Comprar</v-btn>
                <v-btn rounded class="white--text" color="#16796F">Vender</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      stocks: []
    }
  },
  methods: {
    ...mapActions({
      getStocks: 'stocks/getStocks'
    })
  },
  created() {
    this.getStocks()
    .then((data) => {
      this.stocks = data.Items;
    })
    .catch((error) => {
      console.log(error);
    });
  },
}
</script>

<style>

</style>