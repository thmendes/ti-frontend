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
        <v-card-title >Saldo de Ativos</v-card-title>
        <v-card-text class="white--text" style="font-size:larger">R$ {{ totalAssets }}</v-card-text>
        <v-card-text class="white--text">
          <div v-for="asset in assets" :key="asset.id">
            <v-card
              class="my-2"
            >
              <v-card-title>
                {{ asset.stock }}
                <v-chip
                  class="ma-2"
                  color="primary"
                >
                  {{ asset.quantity }}
                </v-chip>
              </v-card-title>
              <v-card-text>
                Valor de compra: R$ {{asset.purchasePrice}}
                <br>
                Valor Atual: R$ {{ asset.currentPrice }}
                <br>
                Saldo total: R$ {{ getTotal(asset.currentPrice, asset.quantity) }}
              </v-card-text>
              <v-card-actions>
                <v-btn rounded class="white--text" color="#16796F">Comprar Mais</v-btn>
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
      account: {
        cpf: '',
        email: '',
        id: '',
        name: '',
        balance: ''
      },
      assets: [],
      totalAssets: 0
    }
  },
  methods: {
    ...mapActions({
      getAccount: 'account/getAccount',
      getAssets: 'assets/getAssets',
    }),
    handleTotalAssets(assets){
      assets.forEach(element => {
        this.totalAssets += element.currentPrice * element.quantity;
      });
      this.totalAssets = Math.round(this.totalAssets * 100) / 100;
    },
    getTotal(price, quantity){
      let total = price * quantity; 
      return Math.round(total * 100) / 100;
    }
  },
  created() {
    this.getAccount()
    .then((data) => {
      Object.assign(this.account, data.Item)
    })
    .catch((error) => {
      console.log(error);
    });

    this.getAssets()
    .then((data) => {
      Object.assign(this.assets, data.Item.assets)
      this.handleTotalAssets(this.assets)
    })
    .catch((error) => {
      console.log(error);
    });
  },
}
</script>

<style>

</style>