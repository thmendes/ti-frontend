<template>
  <v-card
    color="#16796F"
    class="white--text"
  >
    <v-card-title >Histórico de depósitos</v-card-title>
    <v-data-table
      :headers="headers"
      :items="deposits"
      :items-per-page="5"
      class="elevation-1"
      style="border-top-left-radius: 0px; border-top-right-radius: 0px;"
    >
      <template v-slot:[`item.amount`]="{ item }">
        R$ {{ item.amount }}
      </template>
      <template v-slot:[`item.date`]="{ item }">
        {{ getFriendlyDate(item.date) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    deposits: Array
  },
  data() {
    return {
      headers: [
        {text: "Banco origem", value: "origin.bank"},
        {text: "Agencia ogigem", value: "origin.branch"},
        {text: "CPF origem", value: "origin.cpf"},
        {text: "Data", value: "date"},
        {text: "Valor", value: "amount"}
      ]
    }
  },
  methods: {
    getFriendlyDate(date){
      return moment(date).format('DD/MM/yyyy');
    }
  },
  created() {
    
  },
}
</script>

<style>

</style>