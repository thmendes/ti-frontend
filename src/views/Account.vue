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
        color="#16796F"
        class="white--text"
      >
        <v-card-title >Saldo Total</v-card-title>
        <v-card-text class="white--text" style="font-size:larger">R$ {{ Math.round((account.balance + totalAssets) * 100) / 100  }}</v-card-text>
      </v-card>
    </v-col>
    <v-col
      xs="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
      class="float-left"
    >
      <v-card
        color="#7CB7AF"
        class="white--text"
        min-height="242px"
      >
        <v-card-title >Saldo em Conta</v-card-title>
        <v-card-text class="white--text" style="font-size:larger">R$ {{ Math.round(account.balance * 100) / 100 }}</v-card-text>
        <v-card-text class="white--text">Nome: {{ account.name }}<br>Conta: {{ account.id }}</v-card-text>
        <v-card-actions>
          <deposit :account="account"/>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col
      xs="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
      class="float-left"
    >
      <v-card
        color="#9CA89E"
        class="white--text"
        min-height="242px"
      >
        <v-card-title >Saldo de Ativos</v-card-title>
        <v-card-text class="white--text" style="font-size:larger">R$ {{ totalAssets }}</v-card-text>
        <v-card-text class="white--text">
          <div v-for="asset in assets.slice(0, 2)" :key="asset.id">
            <v-chip
              class="my-1"
              text-color="#9CA89E"
            >
              <v-avatar left>
                <v-icon >mdi-arrow-up-bold-outline</v-icon>
              </v-avatar>
              {{asset.stock}} | Valor Individual: R$ {{ Math.round(asset.currentPrice * 100) / 100 }} | Quantidade: {{ asset.quantity}}
            </v-chip>
          </div>
          <v-btn text small class="white--text" @click="$router.push('/ativos')">Ver Mais</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
      class="float-left"
    >
      <history :deposits="account.history"/>
    </v-col>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'
import history from '@/components/account/history'
import deposit from '@/components/account/deposit'

export default {
  components: {
    'history': history,
    'deposit': deposit
  },
  data() 
    {
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
    }
  },
  created() {
    this.getAccount()
    .then((data) => {
      Object.assign(this.account, data.Item)
      this.account.balance = Math.round(this.account.balance * 100) / 100;
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