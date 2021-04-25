<template>
  <v-dialog
    v-if="isLoaded"
    max-width="380"
  >
    <template v-slot:activator="{ on }">
      <v-btn rounded v-on="on" class="white--text" color="#16796F">Depositar</v-btn>
    </template>
    <v-card
      class="mx-auto"
      max-width="380"
    >
      <v-img
        src="https://images.unsplash.com/photo-1579758258316-57081bac8ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
        height="100px"
      ></v-img>

      <v-card-title>
        Faça um depósito
      </v-card-title>

      <v-card-subtitle>
        Modalidade TED
      </v-card-subtitle>

      <v-card-text>
        Banco: 352 - Toro Investimentos<br/>
        Agência: 0001<br/>
        Conta: {{ account.id }}<br/>
        Nome: {{ account.name }}<br/>
        CPF: {{ account.cpf}}
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          @click="show = !show"
        >
          saiba mais
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Não há valor máximo para transferência, e estará disponível na conta do favorecido no mesmo dia, se efetuada entre 06h30 e 17h. Transações fora desse horário ou em fim de semana e feriados serão automaticamente agendadas e realizadas no próximo dia útil.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    account: Object
  },
  data () {
    return {
      isLoaded: true,
      show: false
    }
  }
}
</script>

